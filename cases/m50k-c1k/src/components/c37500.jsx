import React from 'react';
const LABEL_37500 = 'component_37500';
export function Component37500({ value = 37500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37500, 'data-value': derived.doubled }, children);
}
export default Component37500;
