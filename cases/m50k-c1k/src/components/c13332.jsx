import React from 'react';
const LABEL_13332 = 'component_13332';
export function Component13332({ value = 13332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13332, 'data-value': derived.doubled }, children);
}
export default Component13332;
