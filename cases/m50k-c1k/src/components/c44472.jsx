import React from 'react';
const LABEL_44472 = 'component_44472';
export function Component44472({ value = 44472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44472, 'data-value': derived.doubled }, children);
}
export default Component44472;
