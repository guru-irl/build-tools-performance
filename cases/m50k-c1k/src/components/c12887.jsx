import React from 'react';
const LABEL_12887 = 'component_12887';
export function Component12887({ value = 12887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12887, 'data-value': derived.doubled }, children);
}
export default Component12887;
