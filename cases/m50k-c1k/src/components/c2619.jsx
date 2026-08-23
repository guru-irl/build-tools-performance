import React from 'react';
const LABEL_2619 = 'component_2619';
export function Component2619({ value = 2619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2619, 'data-value': derived.doubled }, children);
}
export default Component2619;
