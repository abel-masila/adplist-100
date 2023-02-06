/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

export const LoaderIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
      }}
      width={38}
      height={38}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="cyan"
        strokeWidth={7}
        r={26}
        strokeDasharray="122.52211349000194 42.840704496667314"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.3759398496240602s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};

export default LoaderIcon;
