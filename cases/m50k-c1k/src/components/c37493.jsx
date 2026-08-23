import React from 'react';
const LABEL_37493 = 'component_37493';
export function Component37493({ value = 37493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37493, 'data-value': derived.doubled }, children);
}
export default Component37493;
