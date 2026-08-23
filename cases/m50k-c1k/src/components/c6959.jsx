import React from 'react';
const LABEL_6959 = 'component_6959';
export function Component6959({ value = 6959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6959, 'data-value': derived.doubled }, children);
}
export default Component6959;
