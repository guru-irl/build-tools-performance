import React from 'react';
const LABEL_34666 = 'component_34666';
export function Component34666({ value = 34666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34666, 'data-value': derived.doubled }, children);
}
export default Component34666;
