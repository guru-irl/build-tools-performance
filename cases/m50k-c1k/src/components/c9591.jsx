import React from 'react';
const LABEL_9591 = 'component_9591';
export function Component9591({ value = 9591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9591, 'data-value': derived.doubled }, children);
}
export default Component9591;
