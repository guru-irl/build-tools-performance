import React from 'react';
const LABEL_10508 = 'component_10508';
export function Component10508({ value = 10508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10508, 'data-value': derived.doubled }, children);
}
export default Component10508;
