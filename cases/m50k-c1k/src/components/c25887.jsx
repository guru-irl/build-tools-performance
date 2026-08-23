import React from 'react';
const LABEL_25887 = 'component_25887';
export function Component25887({ value = 25887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25887, 'data-value': derived.doubled }, children);
}
export default Component25887;
