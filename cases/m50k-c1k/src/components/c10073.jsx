import React from 'react';
const LABEL_10073 = 'component_10073';
export function Component10073({ value = 10073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10073, 'data-value': derived.doubled }, children);
}
export default Component10073;
