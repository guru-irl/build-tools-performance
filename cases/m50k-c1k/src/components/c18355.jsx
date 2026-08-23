import React from 'react';
const LABEL_18355 = 'component_18355';
export function Component18355({ value = 18355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18355, 'data-value': derived.doubled }, children);
}
export default Component18355;
