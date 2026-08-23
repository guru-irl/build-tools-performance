import React from 'react';
const LABEL_23999 = 'component_23999';
export function Component23999({ value = 23999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23999, 'data-value': derived.doubled }, children);
}
export default Component23999;
