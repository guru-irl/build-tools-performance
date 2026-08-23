import React from 'react';
const LABEL_44238 = 'component_44238';
export function Component44238({ value = 44238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44238, 'data-value': derived.doubled }, children);
}
export default Component44238;
