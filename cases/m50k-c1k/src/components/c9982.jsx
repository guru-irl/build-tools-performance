import React from 'react';
const LABEL_9982 = 'component_9982';
export function Component9982({ value = 9982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9982, 'data-value': derived.doubled }, children);
}
export default Component9982;
