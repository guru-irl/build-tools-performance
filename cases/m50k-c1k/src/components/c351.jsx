import React from 'react';
const LABEL_351 = 'component_351';
export function Component351({ value = 351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_351, 'data-value': derived.doubled }, children);
}
export default Component351;
