import React from 'react';
const LABEL_9258 = 'component_9258';
export function Component9258({ value = 9258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9258, 'data-value': derived.doubled }, children);
}
export default Component9258;
