import React from 'react';
const LABEL_18435 = 'component_18435';
export function Component18435({ value = 18435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18435, 'data-value': derived.doubled }, children);
}
export default Component18435;
