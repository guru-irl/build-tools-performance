import React from 'react';
const LABEL_35631 = 'component_35631';
export function Component35631({ value = 35631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35631, 'data-value': derived.doubled }, children);
}
export default Component35631;
