import React from 'react';
const LABEL_37362 = 'component_37362';
export function Component37362({ value = 37362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37362, 'data-value': derived.doubled }, children);
}
export default Component37362;
