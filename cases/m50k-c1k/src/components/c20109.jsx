import React from 'react';
const LABEL_20109 = 'component_20109';
export function Component20109({ value = 20109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20109, 'data-value': derived.doubled }, children);
}
export default Component20109;
