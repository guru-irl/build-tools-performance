import React from 'react';
const LABEL_7694 = 'component_7694';
export function Component7694({ value = 7694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7694, 'data-value': derived.doubled }, children);
}
export default Component7694;
