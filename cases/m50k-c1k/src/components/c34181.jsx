import React from 'react';
const LABEL_34181 = 'component_34181';
export function Component34181({ value = 34181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34181, 'data-value': derived.doubled }, children);
}
export default Component34181;
