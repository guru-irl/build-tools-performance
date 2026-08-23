import React from 'react';
const LABEL_26912 = 'component_26912';
export function Component26912({ value = 26912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26912, 'data-value': derived.doubled }, children);
}
export default Component26912;
