import React from 'react';
const LABEL_38935 = 'component_38935';
export function Component38935({ value = 38935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38935, 'data-value': derived.doubled }, children);
}
export default Component38935;
