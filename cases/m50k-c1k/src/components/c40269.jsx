import React from 'react';
const LABEL_40269 = 'component_40269';
export function Component40269({ value = 40269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40269, 'data-value': derived.doubled }, children);
}
export default Component40269;
