import React from 'react';
const LABEL_36676 = 'component_36676';
export function Component36676({ value = 36676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36676, 'data-value': derived.doubled }, children);
}
export default Component36676;
