import React from 'react';
const LABEL_18749 = 'component_18749';
export function Component18749({ value = 18749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18749, 'data-value': derived.doubled }, children);
}
export default Component18749;
