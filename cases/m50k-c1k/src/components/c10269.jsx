import React from 'react';
const LABEL_10269 = 'component_10269';
export function Component10269({ value = 10269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10269, 'data-value': derived.doubled }, children);
}
export default Component10269;
