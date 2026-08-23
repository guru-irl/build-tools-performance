import React from 'react';
const LABEL_34803 = 'component_34803';
export function Component34803({ value = 34803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34803, 'data-value': derived.doubled }, children);
}
export default Component34803;
