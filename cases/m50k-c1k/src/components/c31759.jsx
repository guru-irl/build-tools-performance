import React from 'react';
const LABEL_31759 = 'component_31759';
export function Component31759({ value = 31759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31759, 'data-value': derived.doubled }, children);
}
export default Component31759;
