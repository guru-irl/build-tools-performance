import React from 'react';
const LABEL_37307 = 'component_37307';
export function Component37307({ value = 37307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37307, 'data-value': derived.doubled }, children);
}
export default Component37307;
