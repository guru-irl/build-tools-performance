import React from 'react';
const LABEL_42847 = 'component_42847';
export function Component42847({ value = 42847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42847, 'data-value': derived.doubled }, children);
}
export default Component42847;
