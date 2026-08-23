import React from 'react';
const LABEL_16298 = 'component_16298';
export function Component16298({ value = 16298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16298, 'data-value': derived.doubled }, children);
}
export default Component16298;
