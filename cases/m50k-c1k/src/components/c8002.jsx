import React from 'react';
const LABEL_8002 = 'component_8002';
export function Component8002({ value = 8002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8002, 'data-value': derived.doubled }, children);
}
export default Component8002;
