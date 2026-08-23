import React from 'react';
const LABEL_26085 = 'component_26085';
export function Component26085({ value = 26085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26085, 'data-value': derived.doubled }, children);
}
export default Component26085;
