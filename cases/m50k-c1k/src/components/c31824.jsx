import React from 'react';
const LABEL_31824 = 'component_31824';
export function Component31824({ value = 31824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31824, 'data-value': derived.doubled }, children);
}
export default Component31824;
