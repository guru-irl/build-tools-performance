import React from 'react';
const LABEL_21671 = 'component_21671';
export function Component21671({ value = 21671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21671, 'data-value': derived.doubled }, children);
}
export default Component21671;
