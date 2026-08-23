import React from 'react';
const LABEL_11486 = 'component_11486';
export function Component11486({ value = 11486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11486, 'data-value': derived.doubled }, children);
}
export default Component11486;
