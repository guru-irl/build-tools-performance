import React from 'react';
const LABEL_39489 = 'component_39489';
export function Component39489({ value = 39489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39489, 'data-value': derived.doubled }, children);
}
export default Component39489;
