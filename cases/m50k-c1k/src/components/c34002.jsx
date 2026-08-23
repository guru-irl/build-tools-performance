import React from 'react';
const LABEL_34002 = 'component_34002';
export function Component34002({ value = 34002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34002, 'data-value': derived.doubled }, children);
}
export default Component34002;
