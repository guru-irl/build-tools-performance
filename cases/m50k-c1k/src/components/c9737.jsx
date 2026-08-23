import React from 'react';
const LABEL_9737 = 'component_9737';
export function Component9737({ value = 9737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9737, 'data-value': derived.doubled }, children);
}
export default Component9737;
