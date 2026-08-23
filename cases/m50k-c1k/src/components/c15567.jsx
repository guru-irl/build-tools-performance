import React from 'react';
const LABEL_15567 = 'component_15567';
export function Component15567({ value = 15567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15567, 'data-value': derived.doubled }, children);
}
export default Component15567;
