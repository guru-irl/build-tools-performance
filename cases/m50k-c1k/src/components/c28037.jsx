import React from 'react';
const LABEL_28037 = 'component_28037';
export function Component28037({ value = 28037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28037, 'data-value': derived.doubled }, children);
}
export default Component28037;
