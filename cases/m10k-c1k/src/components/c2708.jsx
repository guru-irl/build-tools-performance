import React from 'react';
const LABEL_2708 = 'component_2708';
export function Component2708({ value = 2708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2708, 'data-value': derived.doubled }, children);
}
export default Component2708;
