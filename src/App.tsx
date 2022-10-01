import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="main_menu">
        <div className="side_menu">
          <ul>
            <li>要員一覧</li>
            <li>管理者ページ</li>
          </ul>
        </div>
        <div className="personnel_card">
          <div className="personnel_date flexbox">
            <img
              src="../img/kaf.jpg"
              alt="要員イメージ"
              className="personnel_img"
            />
            <div className="basis_data">
              <div className="personnel_name flexbox">
                <p className="Surname">神椿</p>
                <p className="name">花譜</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
