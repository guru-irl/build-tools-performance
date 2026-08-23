import React from 'react';
const LABEL_13825 = 'component_13825';
export function Component13825({ value = 13825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13825, 'data-value': derived.doubled }, children);
}
export default Component13825;
