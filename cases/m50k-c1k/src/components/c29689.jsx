import React from 'react';
const LABEL_29689 = 'component_29689';
export function Component29689({ value = 29689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29689, 'data-value': derived.doubled }, children);
}
export default Component29689;
