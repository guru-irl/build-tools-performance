import React from 'react';
const LABEL_39914 = 'component_39914';
export function Component39914({ value = 39914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39914, 'data-value': derived.doubled }, children);
}
export default Component39914;
