import React from 'react';
const LABEL_25060 = 'component_25060';
export function Component25060({ value = 25060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25060, 'data-value': derived.doubled }, children);
}
export default Component25060;
