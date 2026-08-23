import React from 'react';
const LABEL_9524 = 'component_9524';
export function Component9524({ value = 9524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9524, 'data-value': derived.doubled }, children);
}
export default Component9524;
