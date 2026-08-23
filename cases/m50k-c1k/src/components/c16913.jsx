import React from 'react';
const LABEL_16913 = 'component_16913';
export function Component16913({ value = 16913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16913, 'data-value': derived.doubled }, children);
}
export default Component16913;
