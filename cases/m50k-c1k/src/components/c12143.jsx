import React from 'react';
const LABEL_12143 = 'component_12143';
export function Component12143({ value = 12143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12143, 'data-value': derived.doubled }, children);
}
export default Component12143;
