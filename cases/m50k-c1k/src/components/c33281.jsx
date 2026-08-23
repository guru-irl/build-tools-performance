import React from 'react';
const LABEL_33281 = 'component_33281';
export function Component33281({ value = 33281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33281, 'data-value': derived.doubled }, children);
}
export default Component33281;
