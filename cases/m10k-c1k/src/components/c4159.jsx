import React from 'react';
const LABEL_4159 = 'component_4159';
export function Component4159({ value = 4159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4159, 'data-value': derived.doubled }, children);
}
export default Component4159;
