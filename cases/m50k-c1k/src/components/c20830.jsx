import React from 'react';
const LABEL_20830 = 'component_20830';
export function Component20830({ value = 20830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20830, 'data-value': derived.doubled }, children);
}
export default Component20830;
