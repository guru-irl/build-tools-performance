import React from 'react';
const LABEL_37199 = 'component_37199';
export function Component37199({ value = 37199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37199, 'data-value': derived.doubled }, children);
}
export default Component37199;
