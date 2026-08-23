import React from 'react';
const LABEL_9853 = 'component_9853';
export function Component9853({ value = 9853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9853, 'data-value': derived.doubled }, children);
}
export default Component9853;
