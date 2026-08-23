import React from 'react';
const LABEL_38619 = 'component_38619';
export function Component38619({ value = 38619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38619, 'data-value': derived.doubled }, children);
}
export default Component38619;
