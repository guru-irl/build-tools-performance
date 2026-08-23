import React from 'react';
const LABEL_13421 = 'component_13421';
export function Component13421({ value = 13421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13421, 'data-value': derived.doubled }, children);
}
export default Component13421;
