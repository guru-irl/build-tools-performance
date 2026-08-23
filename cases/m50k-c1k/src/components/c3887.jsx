import React from 'react';
const LABEL_3887 = 'component_3887';
export function Component3887({ value = 3887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3887, 'data-value': derived.doubled }, children);
}
export default Component3887;
