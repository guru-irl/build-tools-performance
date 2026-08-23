import React from 'react';
const LABEL_8887 = 'component_8887';
export function Component8887({ value = 8887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8887, 'data-value': derived.doubled }, children);
}
export default Component8887;
