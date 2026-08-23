import React from 'react';
const LABEL_9666 = 'component_9666';
export function Component9666({ value = 9666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9666, 'data-value': derived.doubled }, children);
}
export default Component9666;
