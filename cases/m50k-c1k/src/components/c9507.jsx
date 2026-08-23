import React from 'react';
const LABEL_9507 = 'component_9507';
export function Component9507({ value = 9507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9507, 'data-value': derived.doubled }, children);
}
export default Component9507;
