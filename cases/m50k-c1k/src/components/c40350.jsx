import React from 'react';
const LABEL_40350 = 'component_40350';
export function Component40350({ value = 40350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40350, 'data-value': derived.doubled }, children);
}
export default Component40350;
