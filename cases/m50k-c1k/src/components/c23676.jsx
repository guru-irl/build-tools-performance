import React from 'react';
const LABEL_23676 = 'component_23676';
export function Component23676({ value = 23676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23676, 'data-value': derived.doubled }, children);
}
export default Component23676;
