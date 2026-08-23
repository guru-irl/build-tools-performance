import React from 'react';
const LABEL_28677 = 'component_28677';
export function Component28677({ value = 28677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28677, 'data-value': derived.doubled }, children);
}
export default Component28677;
