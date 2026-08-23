import React from 'react';
const LABEL_9261 = 'component_9261';
export function Component9261({ value = 9261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9261, 'data-value': derived.doubled }, children);
}
export default Component9261;
