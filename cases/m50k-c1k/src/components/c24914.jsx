import React from 'react';
const LABEL_24914 = 'component_24914';
export function Component24914({ value = 24914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24914, 'data-value': derived.doubled }, children);
}
export default Component24914;
