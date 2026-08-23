import React from 'react';
const LABEL_11237 = 'component_11237';
export function Component11237({ value = 11237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11237, 'data-value': derived.doubled }, children);
}
export default Component11237;
