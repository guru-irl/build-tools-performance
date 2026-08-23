import React from 'react';
const LABEL_24730 = 'component_24730';
export function Component24730({ value = 24730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24730, 'data-value': derived.doubled }, children);
}
export default Component24730;
