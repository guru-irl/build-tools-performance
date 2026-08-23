import React from 'react';
const LABEL_42784 = 'component_42784';
export function Component42784({ value = 42784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42784, 'data-value': derived.doubled }, children);
}
export default Component42784;
