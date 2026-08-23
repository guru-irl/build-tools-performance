import React from 'react';
const LABEL_11122 = 'component_11122';
export function Component11122({ value = 11122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11122, 'data-value': derived.doubled }, children);
}
export default Component11122;
