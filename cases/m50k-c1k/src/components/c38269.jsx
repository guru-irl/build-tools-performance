import React from 'react';
const LABEL_38269 = 'component_38269';
export function Component38269({ value = 38269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38269, 'data-value': derived.doubled }, children);
}
export default Component38269;
