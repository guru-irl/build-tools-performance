import React from 'react';
const LABEL_35964 = 'component_35964';
export function Component35964({ value = 35964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35964, 'data-value': derived.doubled }, children);
}
export default Component35964;
