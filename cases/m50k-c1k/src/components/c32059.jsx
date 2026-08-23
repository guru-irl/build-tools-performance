import React from 'react';
const LABEL_32059 = 'component_32059';
export function Component32059({ value = 32059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32059, 'data-value': derived.doubled }, children);
}
export default Component32059;
