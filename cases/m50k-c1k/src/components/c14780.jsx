import React from 'react';
const LABEL_14780 = 'component_14780';
export function Component14780({ value = 14780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14780, 'data-value': derived.doubled }, children);
}
export default Component14780;
