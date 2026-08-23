import React from 'react';
const LABEL_18181 = 'component_18181';
export function Component18181({ value = 18181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18181, 'data-value': derived.doubled }, children);
}
export default Component18181;
