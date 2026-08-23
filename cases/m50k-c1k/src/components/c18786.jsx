import React from 'react';
const LABEL_18786 = 'component_18786';
export function Component18786({ value = 18786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18786, 'data-value': derived.doubled }, children);
}
export default Component18786;
