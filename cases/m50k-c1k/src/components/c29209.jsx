import React from 'react';
const LABEL_29209 = 'component_29209';
export function Component29209({ value = 29209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29209, 'data-value': derived.doubled }, children);
}
export default Component29209;
