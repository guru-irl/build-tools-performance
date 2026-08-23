import React from 'react';
const LABEL_44007 = 'component_44007';
export function Component44007({ value = 44007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44007, 'data-value': derived.doubled }, children);
}
export default Component44007;
