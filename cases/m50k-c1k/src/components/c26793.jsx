import React from 'react';
const LABEL_26793 = 'component_26793';
export function Component26793({ value = 26793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26793, 'data-value': derived.doubled }, children);
}
export default Component26793;
