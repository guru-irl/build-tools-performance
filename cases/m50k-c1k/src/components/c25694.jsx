import React from 'react';
const LABEL_25694 = 'component_25694';
export function Component25694({ value = 25694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25694, 'data-value': derived.doubled }, children);
}
export default Component25694;
