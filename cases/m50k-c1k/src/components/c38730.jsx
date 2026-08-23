import React from 'react';
const LABEL_38730 = 'component_38730';
export function Component38730({ value = 38730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38730, 'data-value': derived.doubled }, children);
}
export default Component38730;
