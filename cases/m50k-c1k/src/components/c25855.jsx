import React from 'react';
const LABEL_25855 = 'component_25855';
export function Component25855({ value = 25855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25855, 'data-value': derived.doubled }, children);
}
export default Component25855;
