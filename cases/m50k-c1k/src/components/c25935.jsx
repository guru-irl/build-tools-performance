import React from 'react';
const LABEL_25935 = 'component_25935';
export function Component25935({ value = 25935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25935, 'data-value': derived.doubled }, children);
}
export default Component25935;
