import React from 'react';
const LABEL_6546 = 'component_6546';
export function Component6546({ value = 6546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6546, 'data-value': derived.doubled }, children);
}
export default Component6546;
