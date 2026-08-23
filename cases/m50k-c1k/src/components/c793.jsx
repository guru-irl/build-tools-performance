import React from 'react';
const LABEL_793 = 'component_793';
export function Component793({ value = 793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_793, 'data-value': derived.doubled }, children);
}
export default Component793;
