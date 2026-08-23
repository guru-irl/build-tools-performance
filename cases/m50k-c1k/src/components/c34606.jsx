import React from 'react';
const LABEL_34606 = 'component_34606';
export function Component34606({ value = 34606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34606, 'data-value': derived.doubled }, children);
}
export default Component34606;
