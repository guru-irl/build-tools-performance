import React from 'react';
const LABEL_36214 = 'component_36214';
export function Component36214({ value = 36214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36214, 'data-value': derived.doubled }, children);
}
export default Component36214;
