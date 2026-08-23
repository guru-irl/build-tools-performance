import React from 'react';
const LABEL_35931 = 'component_35931';
export function Component35931({ value = 35931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35931, 'data-value': derived.doubled }, children);
}
export default Component35931;
