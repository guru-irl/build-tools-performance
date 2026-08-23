import React from 'react';
const LABEL_34127 = 'component_34127';
export function Component34127({ value = 34127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34127, 'data-value': derived.doubled }, children);
}
export default Component34127;
