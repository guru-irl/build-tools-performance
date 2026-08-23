import React from 'react';
const LABEL_16548 = 'component_16548';
export function Component16548({ value = 16548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16548, 'data-value': derived.doubled }, children);
}
export default Component16548;
