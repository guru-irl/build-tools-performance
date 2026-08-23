import React from 'react';
const LABEL_3012 = 'component_3012';
export function Component3012({ value = 3012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3012, 'data-value': derived.doubled }, children);
}
export default Component3012;
