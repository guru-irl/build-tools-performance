import React from 'react';
const LABEL_8099 = 'component_8099';
export function Component8099({ value = 8099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8099, 'data-value': derived.doubled }, children);
}
export default Component8099;
