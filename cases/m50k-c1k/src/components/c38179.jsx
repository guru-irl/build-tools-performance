import React from 'react';
const LABEL_38179 = 'component_38179';
export function Component38179({ value = 38179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38179, 'data-value': derived.doubled }, children);
}
export default Component38179;
