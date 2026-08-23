import React from 'react';
const LABEL_6539 = 'component_6539';
export function Component6539({ value = 6539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6539, 'data-value': derived.doubled }, children);
}
export default Component6539;
