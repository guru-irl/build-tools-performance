import React from 'react';
const LABEL_39305 = 'component_39305';
export function Component39305({ value = 39305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39305, 'data-value': derived.doubled }, children);
}
export default Component39305;
