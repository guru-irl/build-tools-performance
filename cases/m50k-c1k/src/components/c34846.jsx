import React from 'react';
const LABEL_34846 = 'component_34846';
export function Component34846({ value = 34846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34846, 'data-value': derived.doubled }, children);
}
export default Component34846;
