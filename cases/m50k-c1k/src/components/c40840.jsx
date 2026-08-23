import React from 'react';
const LABEL_40840 = 'component_40840';
export function Component40840({ value = 40840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40840, 'data-value': derived.doubled }, children);
}
export default Component40840;
