import React from 'react';
const LABEL_9466 = 'component_9466';
export function Component9466({ value = 9466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9466, 'data-value': derived.doubled }, children);
}
export default Component9466;
