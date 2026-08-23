import React from 'react';
const LABEL_34060 = 'component_34060';
export function Component34060({ value = 34060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34060, 'data-value': derived.doubled }, children);
}
export default Component34060;
