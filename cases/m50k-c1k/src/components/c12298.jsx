import React from 'react';
const LABEL_12298 = 'component_12298';
export function Component12298({ value = 12298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12298, 'data-value': derived.doubled }, children);
}
export default Component12298;
