import React from 'react';
const LABEL_28730 = 'component_28730';
export function Component28730({ value = 28730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28730, 'data-value': derived.doubled }, children);
}
export default Component28730;
