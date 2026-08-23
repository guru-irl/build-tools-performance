import React from 'react';
const LABEL_26180 = 'component_26180';
export function Component26180({ value = 26180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26180, 'data-value': derived.doubled }, children);
}
export default Component26180;
