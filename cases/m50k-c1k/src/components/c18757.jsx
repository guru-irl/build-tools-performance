import React from 'react';
const LABEL_18757 = 'component_18757';
export function Component18757({ value = 18757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18757, 'data-value': derived.doubled }, children);
}
export default Component18757;
