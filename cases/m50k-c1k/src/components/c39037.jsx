import React from 'react';
const LABEL_39037 = 'component_39037';
export function Component39037({ value = 39037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39037, 'data-value': derived.doubled }, children);
}
export default Component39037;
