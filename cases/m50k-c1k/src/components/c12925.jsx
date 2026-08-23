import React from 'react';
const LABEL_12925 = 'component_12925';
export function Component12925({ value = 12925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12925, 'data-value': derived.doubled }, children);
}
export default Component12925;
