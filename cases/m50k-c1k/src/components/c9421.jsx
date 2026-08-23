import React from 'react';
const LABEL_9421 = 'component_9421';
export function Component9421({ value = 9421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9421, 'data-value': derived.doubled }, children);
}
export default Component9421;
