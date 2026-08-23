import React from 'react';
const LABEL_25025 = 'component_25025';
export function Component25025({ value = 25025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25025, 'data-value': derived.doubled }, children);
}
export default Component25025;
