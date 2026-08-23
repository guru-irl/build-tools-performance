import React from 'react';
const LABEL_17730 = 'component_17730';
export function Component17730({ value = 17730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17730, 'data-value': derived.doubled }, children);
}
export default Component17730;
