import React from 'react';
const LABEL_9547 = 'component_9547';
export function Component9547({ value = 9547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9547, 'data-value': derived.doubled }, children);
}
export default Component9547;
