import React from 'react';
const LABEL_9313 = 'component_9313';
export function Component9313({ value = 9313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9313, 'data-value': derived.doubled }, children);
}
export default Component9313;
