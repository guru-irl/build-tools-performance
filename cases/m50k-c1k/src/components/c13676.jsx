import React from 'react';
const LABEL_13676 = 'component_13676';
export function Component13676({ value = 13676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13676, 'data-value': derived.doubled }, children);
}
export default Component13676;
