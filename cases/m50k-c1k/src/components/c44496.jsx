import React from 'react';
const LABEL_44496 = 'component_44496';
export function Component44496({ value = 44496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44496, 'data-value': derived.doubled }, children);
}
export default Component44496;
