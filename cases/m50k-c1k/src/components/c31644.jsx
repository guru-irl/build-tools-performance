import React from 'react';
const LABEL_31644 = 'component_31644';
export function Component31644({ value = 31644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31644, 'data-value': derived.doubled }, children);
}
export default Component31644;
