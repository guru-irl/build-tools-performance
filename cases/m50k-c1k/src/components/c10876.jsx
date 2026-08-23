import React from 'react';
const LABEL_10876 = 'component_10876';
export function Component10876({ value = 10876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10876, 'data-value': derived.doubled }, children);
}
export default Component10876;
