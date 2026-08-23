import React from 'react';
const LABEL_16211 = 'component_16211';
export function Component16211({ value = 16211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16211, 'data-value': derived.doubled }, children);
}
export default Component16211;
