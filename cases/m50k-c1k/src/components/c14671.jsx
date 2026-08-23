import React from 'react';
const LABEL_14671 = 'component_14671';
export function Component14671({ value = 14671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14671, 'data-value': derived.doubled }, children);
}
export default Component14671;
