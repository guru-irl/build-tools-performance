import React from 'react';
const LABEL_44219 = 'component_44219';
export function Component44219({ value = 44219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44219, 'data-value': derived.doubled }, children);
}
export default Component44219;
