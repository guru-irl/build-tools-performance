import React from 'react';
const LABEL_42567 = 'component_42567';
export function Component42567({ value = 42567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42567, 'data-value': derived.doubled }, children);
}
export default Component42567;
