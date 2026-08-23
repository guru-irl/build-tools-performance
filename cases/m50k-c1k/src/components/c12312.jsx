import React from 'react';
const LABEL_12312 = 'component_12312';
export function Component12312({ value = 12312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12312, 'data-value': derived.doubled }, children);
}
export default Component12312;
