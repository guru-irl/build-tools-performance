import React from 'react';
const LABEL_10146 = 'component_10146';
export function Component10146({ value = 10146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10146, 'data-value': derived.doubled }, children);
}
export default Component10146;
