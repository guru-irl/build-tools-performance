import React from 'react';
const LABEL_21186 = 'component_21186';
export function Component21186({ value = 21186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21186, 'data-value': derived.doubled }, children);
}
export default Component21186;
