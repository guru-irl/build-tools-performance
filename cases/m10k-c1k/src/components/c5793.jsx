import React from 'react';
const LABEL_5793 = 'component_5793';
export function Component5793({ value = 5793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5793, 'data-value': derived.doubled }, children);
}
export default Component5793;
