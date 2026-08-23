import React from 'react';
const LABEL_9584 = 'component_9584';
export function Component9584({ value = 9584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9584, 'data-value': derived.doubled }, children);
}
export default Component9584;
