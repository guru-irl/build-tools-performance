import React from 'react';
const LABEL_4037 = 'component_4037';
export function Component4037({ value = 4037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4037, 'data-value': derived.doubled }, children);
}
export default Component4037;
