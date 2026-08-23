import React from 'react';
const LABEL_18412 = 'component_18412';
export function Component18412({ value = 18412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18412, 'data-value': derived.doubled }, children);
}
export default Component18412;
