import React from 'react';
const LABEL_16479 = 'component_16479';
export function Component16479({ value = 16479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16479, 'data-value': derived.doubled }, children);
}
export default Component16479;
