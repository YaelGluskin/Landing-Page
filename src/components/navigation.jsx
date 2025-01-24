export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            אבי הנפלינג יועץ משכנתאות
          </a>{' '}
          <img src='img/logo.jpg' className='img-responsive' alt='' width={60} />{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                למה יועץ
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                צרו קשר
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                השרותים שלי
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                קצת עלי
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                גלריה
              </a>
            </li> */}
            <li>
              <a href='#testimonials' className='page-scroll'>
                לקוחות מספרים
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
