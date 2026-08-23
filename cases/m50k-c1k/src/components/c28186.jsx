import React from 'react';
const LABEL_28186 = 'component_28186';
export function Component28186({ value = 28186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28186, 'data-value': derived.doubled }, children);
}
export default Component28186;
