import React from 'react';
const LABEL_33887 = 'component_33887';
export function Component33887({ value = 33887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33887, 'data-value': derived.doubled }, children);
}
export default Component33887;
