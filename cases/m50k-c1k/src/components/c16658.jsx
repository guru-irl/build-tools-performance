import React from 'react';
const LABEL_16658 = 'component_16658';
export function Component16658({ value = 16658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16658, 'data-value': derived.doubled }, children);
}
export default Component16658;
