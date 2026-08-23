import React from 'react';
const LABEL_26187 = 'component_26187';
export function Component26187({ value = 26187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26187, 'data-value': derived.doubled }, children);
}
export default Component26187;
