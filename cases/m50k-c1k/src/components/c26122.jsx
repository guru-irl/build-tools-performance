import React from 'react';
const LABEL_26122 = 'component_26122';
export function Component26122({ value = 26122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26122, 'data-value': derived.doubled }, children);
}
export default Component26122;
