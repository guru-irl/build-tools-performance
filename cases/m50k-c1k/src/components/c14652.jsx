import React from 'react';
const LABEL_14652 = 'component_14652';
export function Component14652({ value = 14652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14652, 'data-value': derived.doubled }, children);
}
export default Component14652;
