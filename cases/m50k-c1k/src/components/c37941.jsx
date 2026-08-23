import React from 'react';
const LABEL_37941 = 'component_37941';
export function Component37941({ value = 37941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37941, 'data-value': derived.doubled }, children);
}
export default Component37941;
