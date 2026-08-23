import React from 'react';
const LABEL_20578 = 'component_20578';
export function Component20578({ value = 20578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20578, 'data-value': derived.doubled }, children);
}
export default Component20578;
