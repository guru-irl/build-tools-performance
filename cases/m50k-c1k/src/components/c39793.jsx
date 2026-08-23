import React from 'react';
const LABEL_39793 = 'component_39793';
export function Component39793({ value = 39793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39793, 'data-value': derived.doubled }, children);
}
export default Component39793;
