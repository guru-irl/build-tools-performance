import React from 'react';
const LABEL_41060 = 'component_41060';
export function Component41060({ value = 41060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41060, 'data-value': derived.doubled }, children);
}
export default Component41060;
