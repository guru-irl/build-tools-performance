import React from 'react';
const LABEL_5799 = 'component_5799';
export function Component5799({ value = 5799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5799, 'data-value': derived.doubled }, children);
}
export default Component5799;
