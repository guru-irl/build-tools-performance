import React from 'react';
const LABEL_18496 = 'component_18496';
export function Component18496({ value = 18496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18496, 'data-value': derived.doubled }, children);
}
export default Component18496;
