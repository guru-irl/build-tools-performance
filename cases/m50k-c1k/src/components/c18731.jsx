import React from 'react';
const LABEL_18731 = 'component_18731';
export function Component18731({ value = 18731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18731, 'data-value': derived.doubled }, children);
}
export default Component18731;
