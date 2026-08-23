import React from 'react';
const LABEL_31187 = 'component_31187';
export function Component31187({ value = 31187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31187, 'data-value': derived.doubled }, children);
}
export default Component31187;
