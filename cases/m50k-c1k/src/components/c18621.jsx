import React from 'react';
const LABEL_18621 = 'component_18621';
export function Component18621({ value = 18621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18621, 'data-value': derived.doubled }, children);
}
export default Component18621;
