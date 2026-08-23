import React from 'react';
const LABEL_37724 = 'component_37724';
export function Component37724({ value = 37724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37724, 'data-value': derived.doubled }, children);
}
export default Component37724;
