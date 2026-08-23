import React from 'react';
const LABEL_41638 = 'component_41638';
export function Component41638({ value = 41638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41638, 'data-value': derived.doubled }, children);
}
export default Component41638;
