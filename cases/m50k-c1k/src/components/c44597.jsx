import React from 'react';
const LABEL_44597 = 'component_44597';
export function Component44597({ value = 44597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44597, 'data-value': derived.doubled }, children);
}
export default Component44597;
