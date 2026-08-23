import React from 'react';
const LABEL_625 = 'component_625';
export function Component625({ value = 625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_625, 'data-value': derived.doubled }, children);
}
export default Component625;
