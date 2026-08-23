import React from 'react';
const LABEL_36625 = 'component_36625';
export function Component36625({ value = 36625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36625, 'data-value': derived.doubled }, children);
}
export default Component36625;
