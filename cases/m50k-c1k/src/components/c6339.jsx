import React from 'react';
const LABEL_6339 = 'component_6339';
export function Component6339({ value = 6339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6339, 'data-value': derived.doubled }, children);
}
export default Component6339;
