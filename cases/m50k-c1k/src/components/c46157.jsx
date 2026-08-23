import React from 'react';
const LABEL_46157 = 'component_46157';
export function Component46157({ value = 46157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46157, 'data-value': derived.doubled }, children);
}
export default Component46157;
