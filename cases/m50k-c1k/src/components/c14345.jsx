import React from 'react';
const LABEL_14345 = 'component_14345';
export function Component14345({ value = 14345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14345, 'data-value': derived.doubled }, children);
}
export default Component14345;
