import React from 'react';
const LABEL_31269 = 'component_31269';
export function Component31269({ value = 31269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31269, 'data-value': derived.doubled }, children);
}
export default Component31269;
