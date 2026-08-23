import React from 'react';
const LABEL_10613 = 'component_10613';
export function Component10613({ value = 10613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10613, 'data-value': derived.doubled }, children);
}
export default Component10613;
