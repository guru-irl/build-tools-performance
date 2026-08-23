import React from 'react';
const LABEL_32298 = 'component_32298';
export function Component32298({ value = 32298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32298, 'data-value': derived.doubled }, children);
}
export default Component32298;
