import React from 'react';
const LABEL_3793 = 'component_3793';
export function Component3793({ value = 3793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3793, 'data-value': derived.doubled }, children);
}
export default Component3793;
