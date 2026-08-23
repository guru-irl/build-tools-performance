import React from 'react';
const LABEL_28206 = 'component_28206';
export function Component28206({ value = 28206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28206, 'data-value': derived.doubled }, children);
}
export default Component28206;
