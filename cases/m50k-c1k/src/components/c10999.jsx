import React from 'react';
const LABEL_10999 = 'component_10999';
export function Component10999({ value = 10999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10999, 'data-value': derived.doubled }, children);
}
export default Component10999;
