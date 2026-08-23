import React from 'react';
const LABEL_30060 = 'component_30060';
export function Component30060({ value = 30060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30060, 'data-value': derived.doubled }, children);
}
export default Component30060;
