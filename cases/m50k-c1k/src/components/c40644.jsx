import React from 'react';
const LABEL_40644 = 'component_40644';
export function Component40644({ value = 40644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40644, 'data-value': derived.doubled }, children);
}
export default Component40644;
