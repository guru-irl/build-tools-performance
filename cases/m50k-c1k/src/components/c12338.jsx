import React from 'react';
const LABEL_12338 = 'component_12338';
export function Component12338({ value = 12338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12338, 'data-value': derived.doubled }, children);
}
export default Component12338;
