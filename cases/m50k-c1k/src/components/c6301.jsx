import React from 'react';
const LABEL_6301 = 'component_6301';
export function Component6301({ value = 6301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6301, 'data-value': derived.doubled }, children);
}
export default Component6301;
