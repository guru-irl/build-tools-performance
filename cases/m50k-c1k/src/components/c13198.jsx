import React from 'react';
const LABEL_13198 = 'component_13198';
export function Component13198({ value = 13198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13198, 'data-value': derived.doubled }, children);
}
export default Component13198;
