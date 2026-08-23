import React from 'react';
const LABEL_28847 = 'component_28847';
export function Component28847({ value = 28847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28847, 'data-value': derived.doubled }, children);
}
export default Component28847;
