import React from 'react';
const LABEL_37100 = 'component_37100';
export function Component37100({ value = 37100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37100, 'data-value': derived.doubled }, children);
}
export default Component37100;
