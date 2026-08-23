import React from 'react';
const LABEL_16379 = 'component_16379';
export function Component16379({ value = 16379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16379, 'data-value': derived.doubled }, children);
}
export default Component16379;
