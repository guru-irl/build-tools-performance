import React from 'react';
const LABEL_34959 = 'component_34959';
export function Component34959({ value = 34959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34959, 'data-value': derived.doubled }, children);
}
export default Component34959;
