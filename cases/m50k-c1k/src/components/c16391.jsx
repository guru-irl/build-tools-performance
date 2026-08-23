import React from 'react';
const LABEL_16391 = 'component_16391';
export function Component16391({ value = 16391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16391, 'data-value': derived.doubled }, children);
}
export default Component16391;
