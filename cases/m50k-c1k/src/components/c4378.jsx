import React from 'react';
const LABEL_4378 = 'component_4378';
export function Component4378({ value = 4378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4378, 'data-value': derived.doubled }, children);
}
export default Component4378;
