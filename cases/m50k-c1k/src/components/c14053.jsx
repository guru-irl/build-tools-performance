import React from 'react';
const LABEL_14053 = 'component_14053';
export function Component14053({ value = 14053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14053, 'data-value': derived.doubled }, children);
}
export default Component14053;
