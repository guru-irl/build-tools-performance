import React from 'react';
const LABEL_39122 = 'component_39122';
export function Component39122({ value = 39122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39122, 'data-value': derived.doubled }, children);
}
export default Component39122;
