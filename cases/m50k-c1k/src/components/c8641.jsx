import React from 'react';
const LABEL_8641 = 'component_8641';
export function Component8641({ value = 8641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8641, 'data-value': derived.doubled }, children);
}
export default Component8641;
