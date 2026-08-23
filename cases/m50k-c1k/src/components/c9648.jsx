import React from 'react';
const LABEL_9648 = 'component_9648';
export function Component9648({ value = 9648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9648, 'data-value': derived.doubled }, children);
}
export default Component9648;
