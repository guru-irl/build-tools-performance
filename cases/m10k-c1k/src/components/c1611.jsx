import React from 'react';
const LABEL_1611 = 'component_1611';
export function Component1611({ value = 1611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1611, 'data-value': derived.doubled }, children);
}
export default Component1611;
