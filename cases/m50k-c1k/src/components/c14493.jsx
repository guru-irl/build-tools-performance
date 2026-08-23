import React from 'react';
const LABEL_14493 = 'component_14493';
export function Component14493({ value = 14493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14493, 'data-value': derived.doubled }, children);
}
export default Component14493;
