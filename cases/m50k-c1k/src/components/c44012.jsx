import React from 'react';
const LABEL_44012 = 'component_44012';
export function Component44012({ value = 44012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44012, 'data-value': derived.doubled }, children);
}
export default Component44012;
