import React from 'react';
const LABEL_9796 = 'component_9796';
export function Component9796({ value = 9796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9796, 'data-value': derived.doubled }, children);
}
export default Component9796;
