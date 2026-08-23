import React from 'react';
const LABEL_31407 = 'component_31407';
export function Component31407({ value = 31407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31407, 'data-value': derived.doubled }, children);
}
export default Component31407;
