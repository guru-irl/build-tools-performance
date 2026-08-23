import React from 'react';
const LABEL_33209 = 'component_33209';
export function Component33209({ value = 33209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33209, 'data-value': derived.doubled }, children);
}
export default Component33209;
