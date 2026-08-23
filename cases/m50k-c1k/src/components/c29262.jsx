import React from 'react';
const LABEL_29262 = 'component_29262';
export function Component29262({ value = 29262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29262, 'data-value': derived.doubled }, children);
}
export default Component29262;
