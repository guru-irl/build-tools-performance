import React from 'react';
const LABEL_9952 = 'component_9952';
export function Component9952({ value = 9952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9952, 'data-value': derived.doubled }, children);
}
export default Component9952;
