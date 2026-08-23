import React from 'react';
const LABEL_9036 = 'component_9036';
export function Component9036({ value = 9036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9036, 'data-value': derived.doubled }, children);
}
export default Component9036;
