import React from 'react';
const LABEL_34378 = 'component_34378';
export function Component34378({ value = 34378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34378, 'data-value': derived.doubled }, children);
}
export default Component34378;
