import React from 'react';
const LABEL_12671 = 'component_12671';
export function Component12671({ value = 12671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12671, 'data-value': derived.doubled }, children);
}
export default Component12671;
