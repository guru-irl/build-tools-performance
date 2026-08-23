import React from 'react';
const LABEL_14012 = 'component_14012';
export function Component14012({ value = 14012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14012, 'data-value': derived.doubled }, children);
}
export default Component14012;
