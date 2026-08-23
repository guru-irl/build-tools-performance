import React from 'react';
const LABEL_747 = 'component_747';
export function Component747({ value = 747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_747, 'data-value': derived.doubled }, children);
}
export default Component747;
