import React from 'react';
const LABEL_9011 = 'component_9011';
export function Component9011({ value = 9011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9011, 'data-value': derived.doubled }, children);
}
export default Component9011;
