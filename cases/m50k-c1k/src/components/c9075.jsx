import React from 'react';
const LABEL_9075 = 'component_9075';
export function Component9075({ value = 9075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9075, 'data-value': derived.doubled }, children);
}
export default Component9075;
