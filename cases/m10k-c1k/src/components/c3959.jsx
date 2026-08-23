import React from 'react';
const LABEL_3959 = 'component_3959';
export function Component3959({ value = 3959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3959, 'data-value': derived.doubled }, children);
}
export default Component3959;
