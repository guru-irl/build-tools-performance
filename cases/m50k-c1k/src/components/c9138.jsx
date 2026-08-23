import React from 'react';
const LABEL_9138 = 'component_9138';
export function Component9138({ value = 9138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9138, 'data-value': derived.doubled }, children);
}
export default Component9138;
