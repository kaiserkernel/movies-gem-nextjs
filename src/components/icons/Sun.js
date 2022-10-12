import * as React from 'react';

function SvgSun({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8 11.374C7.00544 11.374 6.05161 10.9789 5.34835 10.2757C4.64509 9.57241 4.25 8.61859 4.25 7.62402C4.25 6.62946 4.64509 5.67563 5.34835 4.97237C6.05161 4.26911 7.00544 3.87402 8 3.87402C8.99456 3.87402 9.94839 4.26911 10.6517 4.97237C11.3549 5.67563 11.75 6.62946 11.75 7.62402C11.75 8.61859 11.3549 9.57241 10.6517 10.2757C9.94839 10.9789 8.99456 11.374 8 11.374ZM7.375 0.749023H8.625V2.62402H7.375V0.749023ZM7.375 12.624H8.625V14.499H7.375V12.624ZM2.69688 3.20465L3.58062 2.3209L4.90625 3.64652L4.0225 4.53027L2.69688 3.20527V3.20465ZM11.0938 11.6015L11.9775 10.7178L13.3031 12.0434L12.4194 12.9271L11.0938 11.6015ZM12.4194 2.32027L13.3031 3.20465L11.9775 4.53027L11.0938 3.64652L12.4194 2.3209V2.32027ZM4.0225 10.7178L4.90625 11.6015L3.58062 12.9271L2.69688 12.0434L4.0225 10.7178V10.7178ZM14.875 6.99902V8.24902H13V6.99902H14.875ZM3 6.99902V8.24902H1.125V6.99902H3Z" fill="currentColor"/>
    </svg>
  );
}

export default SvgSun;
