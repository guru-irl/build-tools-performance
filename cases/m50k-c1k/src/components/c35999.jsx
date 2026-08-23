import React from 'react';
const LABEL_35999 = 'component_35999';
export function Component35999({ value = 35999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35999, 'data-value': derived.doubled }, children);
}
export default Component35999;
