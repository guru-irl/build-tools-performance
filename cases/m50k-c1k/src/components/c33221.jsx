import React from 'react';
const LABEL_33221 = 'component_33221';
export function Component33221({ value = 33221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33221, 'data-value': derived.doubled }, children);
}
export default Component33221;
