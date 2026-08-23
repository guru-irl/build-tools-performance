import React from 'react';
const LABEL_14887 = 'component_14887';
export function Component14887({ value = 14887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14887, 'data-value': derived.doubled }, children);
}
export default Component14887;
