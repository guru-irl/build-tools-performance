import React from 'react';
const LABEL_16793 = 'component_16793';
export function Component16793({ value = 16793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16793, 'data-value': derived.doubled }, children);
}
export default Component16793;
