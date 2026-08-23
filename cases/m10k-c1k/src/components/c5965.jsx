import React from 'react';
const LABEL_5965 = 'component_5965';
export function Component5965({ value = 5965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5965, 'data-value': derived.doubled }, children);
}
export default Component5965;
