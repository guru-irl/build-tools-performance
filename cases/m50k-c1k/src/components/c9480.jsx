import React from 'react';
const LABEL_9480 = 'component_9480';
export function Component9480({ value = 9480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9480, 'data-value': derived.doubled }, children);
}
export default Component9480;
