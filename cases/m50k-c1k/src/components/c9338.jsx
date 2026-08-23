import React from 'react';
const LABEL_9338 = 'component_9338';
export function Component9338({ value = 9338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9338, 'data-value': derived.doubled }, children);
}
export default Component9338;
