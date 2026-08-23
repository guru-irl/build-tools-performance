import React from 'react';
const LABEL_9936 = 'component_9936';
export function Component9936({ value = 9936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9936, 'data-value': derived.doubled }, children);
}
export default Component9936;
