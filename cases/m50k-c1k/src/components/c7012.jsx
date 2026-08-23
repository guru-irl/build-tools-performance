import React from 'react';
const LABEL_7012 = 'component_7012';
export function Component7012({ value = 7012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7012, 'data-value': derived.doubled }, children);
}
export default Component7012;
