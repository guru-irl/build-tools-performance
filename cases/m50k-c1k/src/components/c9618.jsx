import React from 'react';
const LABEL_9618 = 'component_9618';
export function Component9618({ value = 9618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9618, 'data-value': derived.doubled }, children);
}
export default Component9618;
