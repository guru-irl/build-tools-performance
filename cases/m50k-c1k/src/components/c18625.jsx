import React from 'react';
const LABEL_18625 = 'component_18625';
export function Component18625({ value = 18625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18625, 'data-value': derived.doubled }, children);
}
export default Component18625;
