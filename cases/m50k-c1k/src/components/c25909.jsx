import React from 'react';
const LABEL_25909 = 'component_25909';
export function Component25909({ value = 25909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25909, 'data-value': derived.doubled }, children);
}
export default Component25909;
