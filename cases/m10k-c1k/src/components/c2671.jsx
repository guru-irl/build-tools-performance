import React from 'react';
const LABEL_2671 = 'component_2671';
export function Component2671({ value = 2671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2671, 'data-value': derived.doubled }, children);
}
export default Component2671;
