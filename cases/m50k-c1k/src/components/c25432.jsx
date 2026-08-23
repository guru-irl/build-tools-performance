import React from 'react';
const LABEL_25432 = 'component_25432';
export function Component25432({ value = 25432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25432, 'data-value': derived.doubled }, children);
}
export default Component25432;
