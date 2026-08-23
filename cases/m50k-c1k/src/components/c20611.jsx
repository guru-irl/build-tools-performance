import React from 'react';
const LABEL_20611 = 'component_20611';
export function Component20611({ value = 20611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20611, 'data-value': derived.doubled }, children);
}
export default Component20611;
