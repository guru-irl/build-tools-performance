import React from 'react';
const LABEL_42378 = 'component_42378';
export function Component42378({ value = 42378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42378, 'data-value': derived.doubled }, children);
}
export default Component42378;
