import React from 'react';
const LABEL_20334 = 'component_20334';
export function Component20334({ value = 20334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20334, 'data-value': derived.doubled }, children);
}
export default Component20334;
