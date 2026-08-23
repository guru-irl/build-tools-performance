import React from 'react';
const LABEL_18759 = 'component_18759';
export function Component18759({ value = 18759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18759, 'data-value': derived.doubled }, children);
}
export default Component18759;
