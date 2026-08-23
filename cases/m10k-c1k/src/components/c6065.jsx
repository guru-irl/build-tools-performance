import React from 'react';
const LABEL_6065 = 'component_6065';
export function Component6065({ value = 6065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6065, 'data-value': derived.doubled }, children);
}
export default Component6065;
