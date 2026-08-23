import React from 'react';
const LABEL_12472 = 'component_12472';
export function Component12472({ value = 12472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12472, 'data-value': derived.doubled }, children);
}
export default Component12472;
