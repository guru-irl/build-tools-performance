import React from 'react';
const LABEL_45578 = 'component_45578';
export function Component45578({ value = 45578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45578, 'data-value': derived.doubled }, children);
}
export default Component45578;
