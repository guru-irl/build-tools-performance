import React from 'react';
const LABEL_22593 = 'component_22593';
export function Component22593({ value = 22593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22593, 'data-value': derived.doubled }, children);
}
export default Component22593;
