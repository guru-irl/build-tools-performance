import React from 'react';
const LABEL_11931 = 'component_11931';
export function Component11931({ value = 11931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11931, 'data-value': derived.doubled }, children);
}
export default Component11931;
