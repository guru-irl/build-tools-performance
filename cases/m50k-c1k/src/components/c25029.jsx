import React from 'react';
const LABEL_25029 = 'component_25029';
export function Component25029({ value = 25029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25029, 'data-value': derived.doubled }, children);
}
export default Component25029;
