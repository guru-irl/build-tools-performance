import React from 'react';
const LABEL_11731 = 'component_11731';
export function Component11731({ value = 11731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11731, 'data-value': derived.doubled }, children);
}
export default Component11731;
