import React from 'react';
const LABEL_37007 = 'component_37007';
export function Component37007({ value = 37007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37007, 'data-value': derived.doubled }, children);
}
export default Component37007;
