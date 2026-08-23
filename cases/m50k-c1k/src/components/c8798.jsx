import React from 'react';
const LABEL_8798 = 'component_8798';
export function Component8798({ value = 8798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8798, 'data-value': derived.doubled }, children);
}
export default Component8798;
