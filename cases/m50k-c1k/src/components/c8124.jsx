import React from 'react';
const LABEL_8124 = 'component_8124';
export function Component8124({ value = 8124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8124, 'data-value': derived.doubled }, children);
}
export default Component8124;
