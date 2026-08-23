import React from 'react';
const LABEL_21432 = 'component_21432';
export function Component21432({ value = 21432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21432, 'data-value': derived.doubled }, children);
}
export default Component21432;
