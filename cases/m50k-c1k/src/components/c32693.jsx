import React from 'react';
const LABEL_32693 = 'component_32693';
export function Component32693({ value = 32693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32693, 'data-value': derived.doubled }, children);
}
export default Component32693;
