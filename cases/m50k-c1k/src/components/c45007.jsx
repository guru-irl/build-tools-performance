import React from 'react';
const LABEL_45007 = 'component_45007';
export function Component45007({ value = 45007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45007, 'data-value': derived.doubled }, children);
}
export default Component45007;
