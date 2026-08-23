import React from 'react';
const LABEL_12793 = 'component_12793';
export function Component12793({ value = 12793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12793, 'data-value': derived.doubled }, children);
}
export default Component12793;
