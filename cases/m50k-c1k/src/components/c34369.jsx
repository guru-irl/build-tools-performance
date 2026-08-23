import React from 'react';
const LABEL_34369 = 'component_34369';
export function Component34369({ value = 34369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34369, 'data-value': derived.doubled }, children);
}
export default Component34369;
