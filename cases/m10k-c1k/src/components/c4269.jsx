import React from 'react';
const LABEL_4269 = 'component_4269';
export function Component4269({ value = 4269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4269, 'data-value': derived.doubled }, children);
}
export default Component4269;
