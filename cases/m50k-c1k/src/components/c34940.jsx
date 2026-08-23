import React from 'react';
const LABEL_34940 = 'component_34940';
export function Component34940({ value = 34940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34940, 'data-value': derived.doubled }, children);
}
export default Component34940;
