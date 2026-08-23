import React from 'react';
const LABEL_19959 = 'component_19959';
export function Component19959({ value = 19959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19959, 'data-value': derived.doubled }, children);
}
export default Component19959;
