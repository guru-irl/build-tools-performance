import React from 'react';
const LABEL_40517 = 'component_40517';
export function Component40517({ value = 40517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40517, 'data-value': derived.doubled }, children);
}
export default Component40517;
