import React from 'react';
const LABEL_18961 = 'component_18961';
export function Component18961({ value = 18961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18961, 'data-value': derived.doubled }, children);
}
export default Component18961;
