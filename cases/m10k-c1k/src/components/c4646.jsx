import React from 'react';
const LABEL_4646 = 'component_4646';
export function Component4646({ value = 4646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4646, 'data-value': derived.doubled }, children);
}
export default Component4646;
