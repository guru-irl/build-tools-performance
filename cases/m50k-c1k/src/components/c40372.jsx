import React from 'react';
const LABEL_40372 = 'component_40372';
export function Component40372({ value = 40372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40372, 'data-value': derived.doubled }, children);
}
export default Component40372;
