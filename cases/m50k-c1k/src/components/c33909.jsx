import React from 'react';
const LABEL_33909 = 'component_33909';
export function Component33909({ value = 33909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33909, 'data-value': derived.doubled }, children);
}
export default Component33909;
