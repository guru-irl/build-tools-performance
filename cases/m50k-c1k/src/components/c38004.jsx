import React from 'react';
const LABEL_38004 = 'component_38004';
export function Component38004({ value = 38004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38004, 'data-value': derived.doubled }, children);
}
export default Component38004;
