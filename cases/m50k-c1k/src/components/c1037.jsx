import React from 'react';
const LABEL_1037 = 'component_1037';
export function Component1037({ value = 1037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1037, 'data-value': derived.doubled }, children);
}
export default Component1037;
