import React from 'react';
const LABEL_45124 = 'component_45124';
export function Component45124({ value = 45124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45124, 'data-value': derived.doubled }, children);
}
export default Component45124;
