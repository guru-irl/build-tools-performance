import React from 'react';
const LABEL_6694 = 'component_6694';
export function Component6694({ value = 6694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6694, 'data-value': derived.doubled }, children);
}
export default Component6694;
