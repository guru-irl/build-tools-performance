import React from 'react';
const LABEL_35676 = 'component_35676';
export function Component35676({ value = 35676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35676, 'data-value': derived.doubled }, children);
}
export default Component35676;
