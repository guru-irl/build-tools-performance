import React from 'react';
const LABEL_8593 = 'component_8593';
export function Component8593({ value = 8593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8593, 'data-value': derived.doubled }, children);
}
export default Component8593;
