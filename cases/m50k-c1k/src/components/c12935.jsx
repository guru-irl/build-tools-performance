import React from 'react';
const LABEL_12935 = 'component_12935';
export function Component12935({ value = 12935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12935, 'data-value': derived.doubled }, children);
}
export default Component12935;
