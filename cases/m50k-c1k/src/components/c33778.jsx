import React from 'react';
const LABEL_33778 = 'component_33778';
export function Component33778({ value = 33778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33778, 'data-value': derived.doubled }, children);
}
export default Component33778;
