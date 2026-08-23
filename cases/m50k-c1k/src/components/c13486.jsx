import React from 'react';
const LABEL_13486 = 'component_13486';
export function Component13486({ value = 13486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13486, 'data-value': derived.doubled }, children);
}
export default Component13486;
