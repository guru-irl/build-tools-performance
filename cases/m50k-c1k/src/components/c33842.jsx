import React from 'react';
const LABEL_33842 = 'component_33842';
export function Component33842({ value = 33842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33842, 'data-value': derived.doubled }, children);
}
export default Component33842;
