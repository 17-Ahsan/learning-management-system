const TSidebar = () => {
    return ( <>
    
    <div className="sidebar" data-background-color="light">
  <div className="sidebar-logo">
    <div className="logo-header" data-background-color="dark">
      <a href="#" className="logo">
        <img
          src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
          alt="navbar brand"
          className="navbar-brand"
          width="200"
        />
      </a>
      <div className="nav-toggle">
        <button className="btn btn-toggle toggle-sidebar">
          <i className="gg-menu-right text"></i>
        </button>
        <button className="btn btn-toggle sidenav-toggler">
          <i className="gg-menu-left"></i>
        </button>
      </div>
      <button className="topbar-toggler more">
        <i className="gg-more-vertical-alt"></i>
      </button>
    </div>
  </div>
  <div className="sidebar-wrapper scrollbar scrollbar-inner">
    <div className="sidebar-content">
      <ul className="nav nav-secondary">
        <li className="nav-item active">
          <a href="#"><i className="fas fa-home"></i><p>Dashboard</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-chalkboard-teacher"></i><p>My Courses</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-users"></i><p>Manage Students</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-folder-open"></i><p>Course Materials</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-clipboard-list"></i><p>Create Assignments</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-file-alt"></i><p>Grade Assignments</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-calendar-check"></i><p>Schedule Classes</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-chart-line"></i><p>Student Performance</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-envelope"></i><p>Messages</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-bullhorn"></i><p>Announcements</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-chart-pie"></i><p>Reports</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-cog"></i><p>Settings</p></a>
        </li>
        <li className="nav-item">
          <a href="#"><i className="fas fa-graduation-cap"></i><p>Certification Requests</p></a>
        </li>
      </ul>
    </div>
  </div>
</div>

    
    
    </> );
}
 
export default TSidebar;