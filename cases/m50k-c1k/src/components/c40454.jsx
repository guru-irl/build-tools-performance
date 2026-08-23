import React from 'react';
const LABEL_40454 = 'component_40454';
export function Component40454({ value = 40454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40454, 'data-value': derived.doubled }, children);
}
export default Component40454;
