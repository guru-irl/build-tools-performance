import React from 'react';
const LABEL_29372 = 'component_29372';
export function Component29372({ value = 29372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29372, 'data-value': derived.doubled }, children);
}
export default Component29372;
