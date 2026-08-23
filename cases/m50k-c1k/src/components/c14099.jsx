import React from 'react';
const LABEL_14099 = 'component_14099';
export function Component14099({ value = 14099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14099, 'data-value': derived.doubled }, children);
}
export default Component14099;
