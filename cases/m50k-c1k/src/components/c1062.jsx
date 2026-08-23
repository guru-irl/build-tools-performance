import React from 'react';
const LABEL_1062 = 'component_1062';
export function Component1062({ value = 1062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1062, 'data-value': derived.doubled }, children);
}
export default Component1062;
