import React from 'react';
const LABEL_38190 = 'component_38190';
export function Component38190({ value = 38190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38190, 'data-value': derived.doubled }, children);
}
export default Component38190;
