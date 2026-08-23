import React from 'react';
const LABEL_8508 = 'component_8508';
export function Component8508({ value = 8508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8508, 'data-value': derived.doubled }, children);
}
export default Component8508;
