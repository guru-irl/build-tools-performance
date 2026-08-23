import React from 'react';
const LABEL_9929 = 'component_9929';
export function Component9929({ value = 9929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9929, 'data-value': derived.doubled }, children);
}
export default Component9929;
