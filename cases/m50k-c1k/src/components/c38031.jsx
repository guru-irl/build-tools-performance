import React from 'react';
const LABEL_38031 = 'component_38031';
export function Component38031({ value = 38031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38031, 'data-value': derived.doubled }, children);
}
export default Component38031;
