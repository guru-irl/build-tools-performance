import React from 'react';
const LABEL_20631 = 'component_20631';
export function Component20631({ value = 20631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20631, 'data-value': derived.doubled }, children);
}
export default Component20631;
