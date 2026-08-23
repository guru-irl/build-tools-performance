import React from 'react';
const LABEL_31479 = 'component_31479';
export function Component31479({ value = 31479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31479, 'data-value': derived.doubled }, children);
}
export default Component31479;
