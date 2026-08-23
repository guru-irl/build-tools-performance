import React from 'react';
const LABEL_18671 = 'component_18671';
export function Component18671({ value = 18671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18671, 'data-value': derived.doubled }, children);
}
export default Component18671;
