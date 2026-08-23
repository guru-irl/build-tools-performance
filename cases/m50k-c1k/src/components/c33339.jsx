import React from 'react';
const LABEL_33339 = 'component_33339';
export function Component33339({ value = 33339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33339, 'data-value': derived.doubled }, children);
}
export default Component33339;
