import React from 'react';
const LABEL_37212 = 'component_37212';
export function Component37212({ value = 37212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37212, 'data-value': derived.doubled }, children);
}
export default Component37212;
