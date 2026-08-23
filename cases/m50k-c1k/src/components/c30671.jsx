import React from 'react';
const LABEL_30671 = 'component_30671';
export function Component30671({ value = 30671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30671, 'data-value': derived.doubled }, children);
}
export default Component30671;
