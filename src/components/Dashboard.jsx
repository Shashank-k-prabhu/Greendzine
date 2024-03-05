const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="title">Employee Productivity Dashboard</div>
      <div className="tile">
        <div id="subtile">
          <p>Productivity on Monday</p>
          <p className="percent">4%</p>
        </div>
        <button style={{ width: "4%" }}></button>
        <div className="subtile">
          <p>Productivity on Tuesday</p>
          <p className="percent">92%</p>
        </div>
        <button style={{ width: "50%" }}></button>
        <div className="subtile">
          <p>Productivity on Wednesday</p>
          <p className="percent">122%</p>
        </div>
        <button style={{ width: "70%" }}></button>
        <div className="subtile">
          <p>Productivity on Thursday</p>
          <p className="percent">93%</p>
        </div>
        <button style={{ width: "52%" }}></button>
        <div className="subtile">
          <p>Productivity on Friday</p>
          <p className="percent">89%</p>
        </div>
        <button style={{ width: "48%" }}></button>
        <div className="subtile">
          <p>Productivity on Saturday</p>
          <p className="percent">98%</p>
        </div>
        <button style={{ width: "60%" }}></button>
      </div>
    </div>
  );
};

export default Dashboard;
