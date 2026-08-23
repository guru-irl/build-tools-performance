import React from 'react';
const LABEL_14060 = 'component_14060';
export function Component14060({ value = 14060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14060, 'data-value': derived.doubled }, children);
}
export default Component14060;
