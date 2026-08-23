import React from 'react';
const LABEL_13931 = 'component_13931';
export function Component13931({ value = 13931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13931, 'data-value': derived.doubled }, children);
}
export default Component13931;
