import React from 'react';
const LABEL_14778 = 'component_14778';
export function Component14778({ value = 14778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14778, 'data-value': derived.doubled }, children);
}
export default Component14778;
