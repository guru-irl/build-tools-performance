import React from 'react';
const LABEL_9964 = 'component_9964';
export function Component9964({ value = 9964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9964, 'data-value': derived.doubled }, children);
}
export default Component9964;
