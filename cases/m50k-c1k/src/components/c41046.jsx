import React from 'react';
const LABEL_41046 = 'component_41046';
export function Component41046({ value = 41046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41046, 'data-value': derived.doubled }, children);
}
export default Component41046;
