import React from 'react';
const LABEL_3062 = 'component_3062';
export function Component3062({ value = 3062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3062, 'data-value': derived.doubled }, children);
}
export default Component3062;
