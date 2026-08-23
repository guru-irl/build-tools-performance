import React from 'react';
const LABEL_36793 = 'component_36793';
export function Component36793({ value = 36793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36793, 'data-value': derived.doubled }, children);
}
export default Component36793;
