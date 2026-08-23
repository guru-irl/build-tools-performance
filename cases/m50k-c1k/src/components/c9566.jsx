import React from 'react';
const LABEL_9566 = 'component_9566';
export function Component9566({ value = 9566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9566, 'data-value': derived.doubled }, children);
}
export default Component9566;
