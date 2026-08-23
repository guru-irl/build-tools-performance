import React from 'react';
const LABEL_15840 = 'component_15840';
export function Component15840({ value = 15840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15840, 'data-value': derived.doubled }, children);
}
export default Component15840;
