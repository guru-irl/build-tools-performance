import React from 'react';
const LABEL_38661 = 'component_38661';
export function Component38661({ value = 38661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38661, 'data-value': derived.doubled }, children);
}
export default Component38661;
