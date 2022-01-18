import { useTranslation } from "react-i18next";
import PageContainer from "../components/PageContainer.component";
import Tile from "../components/Tile.component";
import ProductImage from "../components/ProductImage.component";

import "./Ranking.page.scss";
import JsonData from './../data/ranking.json'

export default function Ranking() {
  const { t } = useTranslation();

  function JsonDataDisplay(){
    const DisplayData=JsonData.items.map(
      (i: { picture: string; name: string; sold: number; turnover: number; })=>{
          return(
              <tr className="Ranking__Table__Row">
                  <td>
                    <ProductImage imageraw={i.picture}/>
                  </td>
                  <td>{i.name}</td>
                  <td>{i.sold}</td>
                  <td>{i.turnover}</td>
              </tr>
          )
      }
    )
    return(
      <table className="Ranking__Table">
          <thead>
              <tr>
              <th>{t("Picture")}</th>
              <th>{t("Name")}</th>
              <th>{t("Sold Items")}</th>
              <th>{t("Turnover")+ " ["+JsonData.currency+"]"}</th>
              </tr>
          </thead>
          <tbody>
              {DisplayData}
          </tbody>
      </table>
    )
  }

  return (
    <PageContainer
      header={t("Good evening") + `, ${localStorage.getItem("user")}!`}
      previousPage={{ route: "/dashboard", name: t("Dashboard") }}
      loggedIn={true}
    >
      <div className="Ranking">
        <Tile width="400px" height="600px" header={t("Category")}>
          <div className="Ranking__Orders">
            <div>
              <div className="Ranking__Orders__Stats">
                <div>{t("Returns")}</div> <div className="Ranking__Orders__Stats-number">9</div>
              </div>
            </div>
          </div>
        </Tile>

        <Tile width="1400px" height="600p">
          {JsonDataDisplay()}
        </Tile>

      </div>
    </PageContainer>
  );
}