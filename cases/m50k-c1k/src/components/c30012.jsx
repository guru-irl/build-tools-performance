import React from 'react';
const LABEL_30012 = 'component_30012';
export function Component30012({ value = 30012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30012, 'data-value': derived.doubled }, children);
}
export default Component30012;
