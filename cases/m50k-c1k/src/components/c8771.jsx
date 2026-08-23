import React from 'react';
const LABEL_8771 = 'component_8771';
export function Component8771({ value = 8771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8771, 'data-value': derived.doubled }, children);
}
export default Component8771;
