import React from 'react';
const LABEL_19378 = 'component_19378';
export function Component19378({ value = 19378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19378, 'data-value': derived.doubled }, children);
}
export default Component19378;
