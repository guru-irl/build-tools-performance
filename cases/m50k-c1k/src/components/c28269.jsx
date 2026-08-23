import React from 'react';
const LABEL_28269 = 'component_28269';
export function Component28269({ value = 28269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28269, 'data-value': derived.doubled }, children);
}
export default Component28269;
