import React from 'react';
const LABEL_4625 = 'component_4625';
export function Component4625({ value = 4625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4625, 'data-value': derived.doubled }, children);
}
export default Component4625;
