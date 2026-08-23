import React from 'react';
const LABEL_22648 = 'component_22648';
export function Component22648({ value = 22648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22648, 'data-value': derived.doubled }, children);
}
export default Component22648;
