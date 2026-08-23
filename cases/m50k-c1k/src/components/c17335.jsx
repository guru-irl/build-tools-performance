import React from 'react';
const LABEL_17335 = 'component_17335';
export function Component17335({ value = 17335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17335, 'data-value': derived.doubled }, children);
}
export default Component17335;
