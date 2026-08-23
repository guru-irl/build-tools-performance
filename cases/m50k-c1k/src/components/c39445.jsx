import React from 'react';
const LABEL_39445 = 'component_39445';
export function Component39445({ value = 39445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39445, 'data-value': derived.doubled }, children);
}
export default Component39445;
