import React from 'react';
const LABEL_37378 = 'component_37378';
export function Component37378({ value = 37378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37378, 'data-value': derived.doubled }, children);
}
export default Component37378;
