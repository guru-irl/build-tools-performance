import React from 'react';
const LABEL_12992 = 'component_12992';
export function Component12992({ value = 12992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12992, 'data-value': derived.doubled }, children);
}
export default Component12992;
