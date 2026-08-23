import React from 'react';
const LABEL_16885 = 'component_16885';
export function Component16885({ value = 16885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16885, 'data-value': derived.doubled }, children);
}
export default Component16885;
