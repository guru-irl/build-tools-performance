import React from 'react';
const LABEL_16959 = 'component_16959';
export function Component16959({ value = 16959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16959, 'data-value': derived.doubled }, children);
}
export default Component16959;
