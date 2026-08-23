import React from 'react';
const LABEL_16181 = 'component_16181';
export function Component16181({ value = 16181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16181, 'data-value': derived.doubled }, children);
}
export default Component16181;
