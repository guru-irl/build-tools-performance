import React from 'react';
const LABEL_38272 = 'component_38272';
export function Component38272({ value = 38272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38272, 'data-value': derived.doubled }, children);
}
export default Component38272;
