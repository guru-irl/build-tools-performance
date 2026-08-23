import React from 'react';
const LABEL_8206 = 'component_8206';
export function Component8206({ value = 8206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8206, 'data-value': derived.doubled }, children);
}
export default Component8206;
