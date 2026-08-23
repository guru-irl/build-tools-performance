import React from 'react';
const LABEL_9063 = 'component_9063';
export function Component9063({ value = 9063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9063, 'data-value': derived.doubled }, children);
}
export default Component9063;
