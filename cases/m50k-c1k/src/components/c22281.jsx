import React from 'react';
const LABEL_22281 = 'component_22281';
export function Component22281({ value = 22281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22281, 'data-value': derived.doubled }, children);
}
export default Component22281;
