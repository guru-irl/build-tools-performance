import React from 'react';
const LABEL_32312 = 'component_32312';
export function Component32312({ value = 32312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32312, 'data-value': derived.doubled }, children);
}
export default Component32312;
