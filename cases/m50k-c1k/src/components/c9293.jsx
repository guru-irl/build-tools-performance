import React from 'react';
const LABEL_9293 = 'component_9293';
export function Component9293({ value = 9293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9293, 'data-value': derived.doubled }, children);
}
export default Component9293;
