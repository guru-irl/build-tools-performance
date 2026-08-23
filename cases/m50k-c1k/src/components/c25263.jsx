import React from 'react';
const LABEL_25263 = 'component_25263';
export function Component25263({ value = 25263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25263, 'data-value': derived.doubled }, children);
}
export default Component25263;
