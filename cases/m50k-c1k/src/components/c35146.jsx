import React from 'react';
const LABEL_35146 = 'component_35146';
export function Component35146({ value = 35146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35146, 'data-value': derived.doubled }, children);
}
export default Component35146;
