import React from 'react';
const LABEL_33305 = 'component_33305';
export function Component33305({ value = 33305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33305, 'data-value': derived.doubled }, children);
}
export default Component33305;
