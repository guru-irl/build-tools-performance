import React from 'react';
const LABEL_36053 = 'component_36053';
export function Component36053({ value = 36053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36053, 'data-value': derived.doubled }, children);
}
export default Component36053;
