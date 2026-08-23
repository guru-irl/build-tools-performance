import React from 'react';
const LABEL_9818 = 'component_9818';
export function Component9818({ value = 9818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9818, 'data-value': derived.doubled }, children);
}
export default Component9818;
