import React from 'react';
const LABEL_23961 = 'component_23961';
export function Component23961({ value = 23961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23961, 'data-value': derived.doubled }, children);
}
export default Component23961;
