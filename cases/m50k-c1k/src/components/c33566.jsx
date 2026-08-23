import React from 'react';
const LABEL_33566 = 'component_33566';
export function Component33566({ value = 33566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33566, 'data-value': derived.doubled }, children);
}
export default Component33566;
