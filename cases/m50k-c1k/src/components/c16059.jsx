import React from 'react';
const LABEL_16059 = 'component_16059';
export function Component16059({ value = 16059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16059, 'data-value': derived.doubled }, children);
}
export default Component16059;
