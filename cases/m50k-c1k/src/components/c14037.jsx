import React from 'react';
const LABEL_14037 = 'component_14037';
export function Component14037({ value = 14037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14037, 'data-value': derived.doubled }, children);
}
export default Component14037;
