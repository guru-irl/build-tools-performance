import React from 'react';
const LABEL_32671 = 'component_32671';
export function Component32671({ value = 32671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32671, 'data-value': derived.doubled }, children);
}
export default Component32671;
