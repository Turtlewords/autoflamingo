
function Shows(){
    return (
        <div className="shows-container fade-in">
          <h2 className="sub-header">Shows</h2>
            <ul className="show-list">
              <li className="shows-item">
                <p className="shows-date">NOV 28  FRI</p>
                <p className="shows-time">10:30 PM</p>
                <a className="shows-venue" href="https://montrosesaloon.com/" target="_blank">Montrose Saloon</a>
                
                <a className="shows-link" href="https://www.eventim.us/event/Something-EasyThe-MagikistsAutoflamingo-Montrose-Saloon/668770?fbclid=IwY2xjawN4p05leHRuA2FlbQIxMABicmlkETFIdkM0TWlsblUyUlNlMDI4c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmwLQxh6g1Du_2nVQY9t9RUyCMDmNAZL7KVyUoiCMPh31B837nDh4F8Dgpwz_aem_51c51UO_Nh7hJ9nYs1XEJg&brid=hPDzHplI-QC2bWDH42QhxQ" target="_blank">Tix</a>
              </li>

              <li className="shows-item">
                <p className="shows-date">DEC 12  FRI</p>
                <p className="shows-time">9:30 PM</p>
                <a className="shows-venue" href="https://montrosesaloon.com/" target="_blank">Montrose Saloon</a>
                
                <a className="shows-link" href="https://www.eventim.us/event/The-JumpsAutoflamingoThe-MagikistsIn-Limbo/668390?fbclid=IwY2xjawN4qXxleHRuA2FlbQIxMABicmlkETFIdkM0TWlsblUyUlNlMDI4c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnXHhwEpZBMUrd1NBc-BIJLOTBzk9xH7ymYvHxhLdxrRllW9PDrDsVHN3ZIW_aem_ppHBVWbRcnNvPEe8zjocOg&brid=fidikR0L-2ECMHETZzgnZg" target="_blank">Tix</a>
              </li>

              <li className="shows-item">
                <p className="shows-date">JAN 9  FRI</p>
                <p className="shows-time">9 PM</p>
                <a className="shows-venue" href="https://www.instagram.com/underground_lounge_chi/?hl=en" target="_blank">Underground Lounge</a>
                
                {/* <a className="shows-link" href="" target="_blank">Tix</a> */}
              </li>
              
            </ul>
        </div>
    )
}

export default Shows;