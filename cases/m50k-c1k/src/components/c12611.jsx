import React from 'react';
const LABEL_12611 = 'component_12611';
export function Component12611({ value = 12611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12611, 'data-value': derived.doubled }, children);
}
export default Component12611;
