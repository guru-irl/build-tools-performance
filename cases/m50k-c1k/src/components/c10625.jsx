import React from 'react';
const LABEL_10625 = 'component_10625';
export function Component10625({ value = 10625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10625, 'data-value': derived.doubled }, children);
}
export default Component10625;
