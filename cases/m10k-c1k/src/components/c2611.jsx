import React from 'react';
const LABEL_2611 = 'component_2611';
export function Component2611({ value = 2611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2611, 'data-value': derived.doubled }, children);
}
export default Component2611;
