import React from 'react';
const LABEL_26269 = 'component_26269';
export function Component26269({ value = 26269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26269, 'data-value': derived.doubled }, children);
}
export default Component26269;
