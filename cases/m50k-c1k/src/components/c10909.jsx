import React from 'react';
const LABEL_10909 = 'component_10909';
export function Component10909({ value = 10909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10909, 'data-value': derived.doubled }, children);
}
export default Component10909;
