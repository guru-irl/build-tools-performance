import React from 'react';
const LABEL_8757 = 'component_8757';
export function Component8757({ value = 8757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8757, 'data-value': derived.doubled }, children);
}
export default Component8757;
