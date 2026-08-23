import React from 'react';
const LABEL_20354 = 'component_20354';
export function Component20354({ value = 20354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20354, 'data-value': derived.doubled }, children);
}
export default Component20354;
