import React from 'react';
const LABEL_7378 = 'component_7378';
export function Component7378({ value = 7378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7378, 'data-value': derived.doubled }, children);
}
export default Component7378;
