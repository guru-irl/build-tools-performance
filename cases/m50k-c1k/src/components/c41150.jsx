import React from 'react';
const LABEL_41150 = 'component_41150';
export function Component41150({ value = 41150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41150, 'data-value': derived.doubled }, children);
}
export default Component41150;
