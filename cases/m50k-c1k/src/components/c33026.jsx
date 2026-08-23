import React from 'react';
const LABEL_33026 = 'component_33026';
export function Component33026({ value = 33026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33026, 'data-value': derived.doubled }, children);
}
export default Component33026;
