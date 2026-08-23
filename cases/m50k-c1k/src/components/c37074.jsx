import React from 'react';
const LABEL_37074 = 'component_37074';
export function Component37074({ value = 37074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37074, 'data-value': derived.doubled }, children);
}
export default Component37074;
