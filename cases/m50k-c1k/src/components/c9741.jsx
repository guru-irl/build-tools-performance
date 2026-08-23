import React from 'react';
const LABEL_9741 = 'component_9741';
export function Component9741({ value = 9741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9741, 'data-value': derived.doubled }, children);
}
export default Component9741;
