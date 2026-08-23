import React from 'react';
const LABEL_630 = 'component_630';
export function Component630({ value = 630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_630, 'data-value': derived.doubled }, children);
}
export default Component630;
