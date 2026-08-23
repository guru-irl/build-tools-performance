import React from 'react';
const LABEL_34031 = 'component_34031';
export function Component34031({ value = 34031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34031, 'data-value': derived.doubled }, children);
}
export default Component34031;
