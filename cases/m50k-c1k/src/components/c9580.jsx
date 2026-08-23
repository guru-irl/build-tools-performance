import React from 'react';
const LABEL_9580 = 'component_9580';
export function Component9580({ value = 9580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9580, 'data-value': derived.doubled }, children);
}
export default Component9580;
