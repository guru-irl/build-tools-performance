import React from 'react';
const LABEL_9887 = 'component_9887';
export function Component9887({ value = 9887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9887, 'data-value': derived.doubled }, children);
}
export default Component9887;
