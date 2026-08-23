import React from 'react';
const LABEL_23793 = 'component_23793';
export function Component23793({ value = 23793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23793, 'data-value': derived.doubled }, children);
}
export default Component23793;
