import React from 'react';
const LABEL_6269 = 'component_6269';
export function Component6269({ value = 6269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6269, 'data-value': derived.doubled }, children);
}
export default Component6269;
