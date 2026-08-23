import React from 'react';
const LABEL_46269 = 'component_46269';
export function Component46269({ value = 46269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46269, 'data-value': derived.doubled }, children);
}
export default Component46269;
