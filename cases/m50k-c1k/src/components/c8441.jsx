import React from 'react';
const LABEL_8441 = 'component_8441';
export function Component8441({ value = 8441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8441, 'data-value': derived.doubled }, children);
}
export default Component8441;
