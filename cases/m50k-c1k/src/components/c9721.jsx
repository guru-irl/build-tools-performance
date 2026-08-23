import React from 'react';
const LABEL_9721 = 'component_9721';
export function Component9721({ value = 9721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9721, 'data-value': derived.doubled }, children);
}
export default Component9721;
