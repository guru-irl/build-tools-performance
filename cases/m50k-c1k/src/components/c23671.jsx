import React from 'react';
const LABEL_23671 = 'component_23671';
export function Component23671({ value = 23671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23671, 'data-value': derived.doubled }, children);
}
export default Component23671;
