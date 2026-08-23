import React from 'react';
const LABEL_9672 = 'component_9672';
export function Component9672({ value = 9672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9672, 'data-value': derived.doubled }, children);
}
export default Component9672;
