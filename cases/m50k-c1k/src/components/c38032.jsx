import React from 'react';
const LABEL_38032 = 'component_38032';
export function Component38032({ value = 38032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38032, 'data-value': derived.doubled }, children);
}
export default Component38032;
