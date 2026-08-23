import React from 'react';
const LABEL_6630 = 'component_6630';
export function Component6630({ value = 6630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6630, 'data-value': derived.doubled }, children);
}
export default Component6630;
