import React from 'react';
const LABEL_45732 = 'component_45732';
export function Component45732({ value = 45732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45732, 'data-value': derived.doubled }, children);
}
export default Component45732;
