import React from 'react';
const LABEL_10563 = 'component_10563';
export function Component10563({ value = 10563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10563, 'data-value': derived.doubled }, children);
}
export default Component10563;
