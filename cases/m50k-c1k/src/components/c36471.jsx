import React from 'react';
const LABEL_36471 = 'component_36471';
export function Component36471({ value = 36471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36471, 'data-value': derived.doubled }, children);
}
export default Component36471;
