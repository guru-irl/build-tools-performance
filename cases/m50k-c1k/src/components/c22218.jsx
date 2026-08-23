import React from 'react';
const LABEL_22218 = 'component_22218';
export function Component22218({ value = 22218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22218, 'data-value': derived.doubled }, children);
}
export default Component22218;
