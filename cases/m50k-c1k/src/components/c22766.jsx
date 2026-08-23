import React from 'react';
const LABEL_22766 = 'component_22766';
export function Component22766({ value = 22766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22766, 'data-value': derived.doubled }, children);
}
export default Component22766;
