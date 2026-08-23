import React from 'react';
const LABEL_26652 = 'component_26652';
export function Component26652({ value = 26652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26652, 'data-value': derived.doubled }, children);
}
export default Component26652;
