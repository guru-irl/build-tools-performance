import React from 'react';
const LABEL_9196 = 'component_9196';
export function Component9196({ value = 9196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9196, 'data-value': derived.doubled }, children);
}
export default Component9196;
