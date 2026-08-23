import React from 'react';
const LABEL_29140 = 'component_29140';
export function Component29140({ value = 29140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29140, 'data-value': derived.doubled }, children);
}
export default Component29140;
