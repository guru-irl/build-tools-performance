import React from 'react';
const LABEL_33595 = 'component_33595';
export function Component33595({ value = 33595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33595, 'data-value': derived.doubled }, children);
}
export default Component33595;
