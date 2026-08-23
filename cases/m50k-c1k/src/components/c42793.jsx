import React from 'react';
const LABEL_42793 = 'component_42793';
export function Component42793({ value = 42793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42793, 'data-value': derived.doubled }, children);
}
export default Component42793;
