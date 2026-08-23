import React from 'react';
const LABEL_12591 = 'component_12591';
export function Component12591({ value = 12591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12591, 'data-value': derived.doubled }, children);
}
export default Component12591;
