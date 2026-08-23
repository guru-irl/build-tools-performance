import React from 'react';
const LABEL_9325 = 'component_9325';
export function Component9325({ value = 9325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9325, 'data-value': derived.doubled }, children);
}
export default Component9325;
