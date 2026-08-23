import React from 'react';
const LABEL_26671 = 'component_26671';
export function Component26671({ value = 26671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26671, 'data-value': derived.doubled }, children);
}
export default Component26671;
