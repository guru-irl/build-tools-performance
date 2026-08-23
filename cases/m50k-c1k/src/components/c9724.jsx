import React from 'react';
const LABEL_9724 = 'component_9724';
export function Component9724({ value = 9724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9724, 'data-value': derived.doubled }, children);
}
export default Component9724;
