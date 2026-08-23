import React from 'react';
const LABEL_9231 = 'component_9231';
export function Component9231({ value = 9231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9231, 'data-value': derived.doubled }, children);
}
export default Component9231;
