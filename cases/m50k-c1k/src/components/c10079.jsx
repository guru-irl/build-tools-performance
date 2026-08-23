import React from 'react';
const LABEL_10079 = 'component_10079';
export function Component10079({ value = 10079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10079, 'data-value': derived.doubled }, children);
}
export default Component10079;
