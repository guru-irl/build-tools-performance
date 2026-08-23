import React from 'react';
const LABEL_42926 = 'component_42926';
export function Component42926({ value = 42926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42926, 'data-value': derived.doubled }, children);
}
export default Component42926;
