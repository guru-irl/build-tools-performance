import React from 'react';
const LABEL_29661 = 'component_29661';
export function Component29661({ value = 29661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29661, 'data-value': derived.doubled }, children);
}
export default Component29661;
