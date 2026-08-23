import React from 'react';
const LABEL_35186 = 'component_35186';
export function Component35186({ value = 35186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35186, 'data-value': derived.doubled }, children);
}
export default Component35186;
