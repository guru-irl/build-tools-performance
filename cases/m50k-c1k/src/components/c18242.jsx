import React from 'react';
const LABEL_18242 = 'component_18242';
export function Component18242({ value = 18242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18242, 'data-value': derived.doubled }, children);
}
export default Component18242;
