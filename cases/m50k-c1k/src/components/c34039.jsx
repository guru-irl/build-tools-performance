import React from 'react';
const LABEL_34039 = 'component_34039';
export function Component34039({ value = 34039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34039, 'data-value': derived.doubled }, children);
}
export default Component34039;
