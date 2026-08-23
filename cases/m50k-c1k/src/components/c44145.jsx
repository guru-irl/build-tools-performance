import React from 'react';
const LABEL_44145 = 'component_44145';
export function Component44145({ value = 44145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44145, 'data-value': derived.doubled }, children);
}
export default Component44145;
