import React from 'react';
const LABEL_9176 = 'component_9176';
export function Component9176({ value = 9176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9176, 'data-value': derived.doubled }, children);
}
export default Component9176;
