import React from 'react';
const LABEL_32388 = 'component_32388';
export function Component32388({ value = 32388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32388, 'data-value': derived.doubled }, children);
}
export default Component32388;
