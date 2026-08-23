import React from 'react';
const LABEL_10676 = 'component_10676';
export function Component10676({ value = 10676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10676, 'data-value': derived.doubled }, children);
}
export default Component10676;
