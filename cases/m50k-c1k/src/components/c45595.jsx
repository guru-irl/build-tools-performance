import React from 'react';
const LABEL_45595 = 'component_45595';
export function Component45595({ value = 45595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45595, 'data-value': derived.doubled }, children);
}
export default Component45595;
