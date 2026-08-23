import React from 'react';
const LABEL_18825 = 'component_18825';
export function Component18825({ value = 18825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18825, 'data-value': derived.doubled }, children);
}
export default Component18825;
