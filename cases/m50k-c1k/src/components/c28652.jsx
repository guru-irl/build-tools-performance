import React from 'react';
const LABEL_28652 = 'component_28652';
export function Component28652({ value = 28652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28652, 'data-value': derived.doubled }, children);
}
export default Component28652;
