import React from 'react';
const LABEL_4489 = 'component_4489';
export function Component4489({ value = 4489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4489, 'data-value': derived.doubled }, children);
}
export default Component4489;
