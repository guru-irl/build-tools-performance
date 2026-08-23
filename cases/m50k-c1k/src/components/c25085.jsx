import React from 'react';
const LABEL_25085 = 'component_25085';
export function Component25085({ value = 25085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25085, 'data-value': derived.doubled }, children);
}
export default Component25085;
