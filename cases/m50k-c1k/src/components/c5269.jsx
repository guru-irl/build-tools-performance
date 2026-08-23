import React from 'react';
const LABEL_5269 = 'component_5269';
export function Component5269({ value = 5269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5269, 'data-value': derived.doubled }, children);
}
export default Component5269;
