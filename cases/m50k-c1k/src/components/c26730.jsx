import React from 'react';
const LABEL_26730 = 'component_26730';
export function Component26730({ value = 26730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26730, 'data-value': derived.doubled }, children);
}
export default Component26730;
