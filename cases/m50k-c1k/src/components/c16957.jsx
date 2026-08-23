import React from 'react';
const LABEL_16957 = 'component_16957';
export function Component16957({ value = 16957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16957, 'data-value': derived.doubled }, children);
}
export default Component16957;
