import React from 'react';
const LABEL_30784 = 'component_30784';
export function Component30784({ value = 30784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30784, 'data-value': derived.doubled }, children);
}
export default Component30784;
