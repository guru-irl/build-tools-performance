import React from 'react';
const LABEL_1648 = 'component_1648';
export function Component1648({ value = 1648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1648, 'data-value': derived.doubled }, children);
}
export default Component1648;
