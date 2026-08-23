import React from 'react';
const LABEL_18568 = 'component_18568';
export function Component18568({ value = 18568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18568, 'data-value': derived.doubled }, children);
}
export default Component18568;
