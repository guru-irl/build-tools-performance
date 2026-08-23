import React from 'react';
const LABEL_12206 = 'component_12206';
export function Component12206({ value = 12206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12206, 'data-value': derived.doubled }, children);
}
export default Component12206;
