import React from 'react';
const LABEL_34046 = 'component_34046';
export function Component34046({ value = 34046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34046, 'data-value': derived.doubled }, children);
}
export default Component34046;
