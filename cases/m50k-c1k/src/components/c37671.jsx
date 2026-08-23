import React from 'react';
const LABEL_37671 = 'component_37671';
export function Component37671({ value = 37671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37671, 'data-value': derived.doubled }, children);
}
export default Component37671;
