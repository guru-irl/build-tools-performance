import React from 'react';
const LABEL_9241 = 'component_9241';
export function Component9241({ value = 9241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9241, 'data-value': derived.doubled }, children);
}
export default Component9241;
