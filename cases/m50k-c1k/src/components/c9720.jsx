import React from 'react';
const LABEL_9720 = 'component_9720';
export function Component9720({ value = 9720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9720, 'data-value': derived.doubled }, children);
}
export default Component9720;
