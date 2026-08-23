import React from 'react';
const LABEL_25786 = 'component_25786';
export function Component25786({ value = 25786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25786, 'data-value': derived.doubled }, children);
}
export default Component25786;
