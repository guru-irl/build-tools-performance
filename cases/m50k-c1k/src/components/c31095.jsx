import React from 'react';
const LABEL_31095 = 'component_31095';
export function Component31095({ value = 31095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31095, 'data-value': derived.doubled }, children);
}
export default Component31095;
