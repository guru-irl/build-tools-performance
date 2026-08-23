import React from 'react';
const LABEL_18317 = 'component_18317';
export function Component18317({ value = 18317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18317, 'data-value': derived.doubled }, children);
}
export default Component18317;
