import React from 'react';
const LABEL_19060 = 'component_19060';
export function Component19060({ value = 19060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19060, 'data-value': derived.doubled }, children);
}
export default Component19060;
