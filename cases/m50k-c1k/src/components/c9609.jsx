import React from 'react';
const LABEL_9609 = 'component_9609';
export function Component9609({ value = 9609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9609, 'data-value': derived.doubled }, children);
}
export default Component9609;
