import React from 'react';
const LABEL_4999 = 'component_4999';
export function Component4999({ value = 4999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4999, 'data-value': derived.doubled }, children);
}
export default Component4999;
