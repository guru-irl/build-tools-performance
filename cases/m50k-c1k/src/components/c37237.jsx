import React from 'react';
const LABEL_37237 = 'component_37237';
export function Component37237({ value = 37237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37237, 'data-value': derived.doubled }, children);
}
export default Component37237;
