import React from 'react';
const LABEL_34654 = 'component_34654';
export function Component34654({ value = 34654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34654, 'data-value': derived.doubled }, children);
}
export default Component34654;
