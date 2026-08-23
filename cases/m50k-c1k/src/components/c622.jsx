import React from 'react';
const LABEL_622 = 'component_622';
export function Component622({ value = 622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_622, 'data-value': derived.doubled }, children);
}
export default Component622;
