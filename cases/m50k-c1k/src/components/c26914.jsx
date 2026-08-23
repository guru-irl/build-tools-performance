import React from 'react';
const LABEL_26914 = 'component_26914';
export function Component26914({ value = 26914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26914, 'data-value': derived.doubled }, children);
}
export default Component26914;
