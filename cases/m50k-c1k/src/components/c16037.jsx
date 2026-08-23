import React from 'react';
const LABEL_16037 = 'component_16037';
export function Component16037({ value = 16037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16037, 'data-value': derived.doubled }, children);
}
export default Component16037;
