import React from 'react';
const LABEL_7793 = 'component_7793';
export function Component7793({ value = 7793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7793, 'data-value': derived.doubled }, children);
}
export default Component7793;
