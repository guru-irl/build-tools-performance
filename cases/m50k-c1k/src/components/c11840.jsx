import React from 'react';
const LABEL_11840 = 'component_11840';
export function Component11840({ value = 11840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11840, 'data-value': derived.doubled }, children);
}
export default Component11840;
