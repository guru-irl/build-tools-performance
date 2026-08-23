import React from 'react';
const LABEL_34029 = 'component_34029';
export function Component34029({ value = 34029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34029, 'data-value': derived.doubled }, children);
}
export default Component34029;
