import React from 'react';
const LABEL_9926 = 'component_9926';
export function Component9926({ value = 9926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9926, 'data-value': derived.doubled }, children);
}
export default Component9926;
