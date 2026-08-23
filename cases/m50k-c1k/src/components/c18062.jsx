import React from 'react';
const LABEL_18062 = 'component_18062';
export function Component18062({ value = 18062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18062, 'data-value': derived.doubled }, children);
}
export default Component18062;
