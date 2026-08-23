import React from 'react';
const LABEL_14489 = 'component_14489';
export function Component14489({ value = 14489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14489, 'data-value': derived.doubled }, children);
}
export default Component14489;
