import React from 'react';
const LABEL_33956 = 'component_33956';
export function Component33956({ value = 33956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33956, 'data-value': derived.doubled }, children);
}
export default Component33956;
