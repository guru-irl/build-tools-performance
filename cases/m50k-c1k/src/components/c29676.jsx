import React from 'react';
const LABEL_29676 = 'component_29676';
export function Component29676({ value = 29676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29676, 'data-value': derived.doubled }, children);
}
export default Component29676;
