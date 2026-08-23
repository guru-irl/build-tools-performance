import React from 'react';
const LABEL_11730 = 'component_11730';
export function Component11730({ value = 11730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11730, 'data-value': derived.doubled }, children);
}
export default Component11730;
