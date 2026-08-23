import React from 'react';
const LABEL_11350 = 'component_11350';
export function Component11350({ value = 11350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11350, 'data-value': derived.doubled }, children);
}
export default Component11350;
