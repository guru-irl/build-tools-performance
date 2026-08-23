import React from 'react';
const LABEL_35794 = 'component_35794';
export function Component35794({ value = 35794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35794, 'data-value': derived.doubled }, children);
}
export default Component35794;
