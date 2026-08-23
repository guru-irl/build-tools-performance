import React from 'react';
const LABEL_6785 = 'component_6785';
export function Component6785({ value = 6785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6785, 'data-value': derived.doubled }, children);
}
export default Component6785;
