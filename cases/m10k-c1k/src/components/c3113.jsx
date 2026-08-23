import React from 'react';
const LABEL_3113 = 'component_3113';
export function Component3113({ value = 3113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3113, 'data-value': derived.doubled }, children);
}
export default Component3113;
