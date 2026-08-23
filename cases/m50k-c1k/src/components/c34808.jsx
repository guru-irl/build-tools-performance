import React from 'react';
const LABEL_34808 = 'component_34808';
export function Component34808({ value = 34808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34808, 'data-value': derived.doubled }, children);
}
export default Component34808;
