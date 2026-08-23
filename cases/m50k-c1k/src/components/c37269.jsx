import React from 'react';
const LABEL_37269 = 'component_37269';
export function Component37269({ value = 37269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37269, 'data-value': derived.doubled }, children);
}
export default Component37269;
