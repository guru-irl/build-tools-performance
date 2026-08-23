import React from 'react';
const LABEL_37361 = 'component_37361';
export function Component37361({ value = 37361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37361, 'data-value': derived.doubled }, children);
}
export default Component37361;
