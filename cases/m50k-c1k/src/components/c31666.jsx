import React from 'react';
const LABEL_31666 = 'component_31666';
export function Component31666({ value = 31666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31666, 'data-value': derived.doubled }, children);
}
export default Component31666;
