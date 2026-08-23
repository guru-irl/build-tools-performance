import React from 'react';
const LABEL_38812 = 'component_38812';
export function Component38812({ value = 38812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38812, 'data-value': derived.doubled }, children);
}
export default Component38812;
