import React from 'react';
const LABEL_12755 = 'component_12755';
export function Component12755({ value = 12755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12755, 'data-value': derived.doubled }, children);
}
export default Component12755;
