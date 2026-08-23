import React from 'react';
const LABEL_8860 = 'component_8860';
export function Component8860({ value = 8860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8860, 'data-value': derived.doubled }, children);
}
export default Component8860;
