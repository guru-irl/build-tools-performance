import React from 'react';
const LABEL_9651 = 'component_9651';
export function Component9651({ value = 9651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9651, 'data-value': derived.doubled }, children);
}
export default Component9651;
