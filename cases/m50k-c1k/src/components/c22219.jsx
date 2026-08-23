import React from 'react';
const LABEL_22219 = 'component_22219';
export function Component22219({ value = 22219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22219, 'data-value': derived.doubled }, children);
}
export default Component22219;
