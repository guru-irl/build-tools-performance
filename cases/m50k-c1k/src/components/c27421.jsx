import React from 'react';
const LABEL_27421 = 'component_27421';
export function Component27421({ value = 27421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27421, 'data-value': derived.doubled }, children);
}
export default Component27421;
