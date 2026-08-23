import React from 'react';
const LABEL_28510 = 'component_28510';
export function Component28510({ value = 28510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28510, 'data-value': derived.doubled }, children);
}
export default Component28510;
