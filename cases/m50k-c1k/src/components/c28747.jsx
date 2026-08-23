import React from 'react';
const LABEL_28747 = 'component_28747';
export function Component28747({ value = 28747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28747, 'data-value': derived.doubled }, children);
}
export default Component28747;
