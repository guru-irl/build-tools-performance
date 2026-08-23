import React from 'react';
const LABEL_8917 = 'component_8917';
export function Component8917({ value = 8917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8917, 'data-value': derived.doubled }, children);
}
export default Component8917;
