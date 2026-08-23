import React from 'react';
const LABEL_9033 = 'component_9033';
export function Component9033({ value = 9033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9033, 'data-value': derived.doubled }, children);
}
export default Component9033;
