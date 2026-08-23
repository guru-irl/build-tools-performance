import React from 'react';
const LABEL_45060 = 'component_45060';
export function Component45060({ value = 45060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45060, 'data-value': derived.doubled }, children);
}
export default Component45060;
