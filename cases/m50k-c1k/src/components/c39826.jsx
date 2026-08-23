import React from 'react';
const LABEL_39826 = 'component_39826';
export function Component39826({ value = 39826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39826, 'data-value': derived.doubled }, children);
}
export default Component39826;
