import React from 'react';
const LABEL_45652 = 'component_45652';
export function Component45652({ value = 45652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45652, 'data-value': derived.doubled }, children);
}
export default Component45652;
