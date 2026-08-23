import React from 'react';
const LABEL_36840 = 'component_36840';
export function Component36840({ value = 36840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36840, 'data-value': derived.doubled }, children);
}
export default Component36840;
