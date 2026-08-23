import React from 'react';
const LABEL_23112 = 'component_23112';
export function Component23112({ value = 23112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23112, 'data-value': derived.doubled }, children);
}
export default Component23112;
