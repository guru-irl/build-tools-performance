import React from 'react';
const LABEL_20876 = 'component_20876';
export function Component20876({ value = 20876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20876, 'data-value': derived.doubled }, children);
}
export default Component20876;
