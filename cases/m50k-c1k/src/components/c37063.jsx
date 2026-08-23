import React from 'react';
const LABEL_37063 = 'component_37063';
export function Component37063({ value = 37063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37063, 'data-value': derived.doubled }, children);
}
export default Component37063;
