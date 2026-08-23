import React from 'react';
const LABEL_18 = 'component_18';
export function Component18({ value = 18, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18, 'data-value': derived.doubled }, children);
}
export default Component18;
