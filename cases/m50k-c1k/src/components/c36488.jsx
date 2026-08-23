import React from 'react';
const LABEL_36488 = 'component_36488';
export function Component36488({ value = 36488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36488, 'data-value': derived.doubled }, children);
}
export default Component36488;
