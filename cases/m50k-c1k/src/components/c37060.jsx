import React from 'react';
const LABEL_37060 = 'component_37060';
export function Component37060({ value = 37060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37060, 'data-value': derived.doubled }, children);
}
export default Component37060;
