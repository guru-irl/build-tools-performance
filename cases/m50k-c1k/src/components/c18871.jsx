import React from 'react';
const LABEL_18871 = 'component_18871';
export function Component18871({ value = 18871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18871, 'data-value': derived.doubled }, children);
}
export default Component18871;
