import React from 'react';
const LABEL_30269 = 'component_30269';
export function Component30269({ value = 30269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30269, 'data-value': derived.doubled }, children);
}
export default Component30269;
