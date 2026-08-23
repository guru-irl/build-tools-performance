import React from 'react';
const LABEL_563 = 'component_563';
export function Component563({ value = 563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_563, 'data-value': derived.doubled }, children);
}
export default Component563;
