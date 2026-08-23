import React from 'react';
const LABEL_9394 = 'component_9394';
export function Component9394({ value = 9394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9394, 'data-value': derived.doubled }, children);
}
export default Component9394;
