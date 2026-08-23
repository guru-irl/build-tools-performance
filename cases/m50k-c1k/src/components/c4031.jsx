import React from 'react';
const LABEL_4031 = 'component_4031';
export function Component4031({ value = 4031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4031, 'data-value': derived.doubled }, children);
}
export default Component4031;
