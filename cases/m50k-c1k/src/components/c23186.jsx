import React from 'react';
const LABEL_23186 = 'component_23186';
export function Component23186({ value = 23186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23186, 'data-value': derived.doubled }, children);
}
export default Component23186;
