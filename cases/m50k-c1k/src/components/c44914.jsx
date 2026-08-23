import React from 'react';
const LABEL_44914 = 'component_44914';
export function Component44914({ value = 44914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44914, 'data-value': derived.doubled }, children);
}
export default Component44914;
