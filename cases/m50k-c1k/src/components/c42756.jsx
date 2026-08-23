import React from 'react';
const LABEL_42756 = 'component_42756';
export function Component42756({ value = 42756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42756, 'data-value': derived.doubled }, children);
}
export default Component42756;
