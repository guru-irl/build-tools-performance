import React from 'react';
const LABEL_19062 = 'component_19062';
export function Component19062({ value = 19062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19062, 'data-value': derived.doubled }, children);
}
export default Component19062;
