import React from 'react';
const LABEL_35187 = 'component_35187';
export function Component35187({ value = 35187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35187, 'data-value': derived.doubled }, children);
}
export default Component35187;
