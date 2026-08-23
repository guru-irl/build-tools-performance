import React from 'react';
const LABEL_31763 = 'component_31763';
export function Component31763({ value = 31763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31763, 'data-value': derived.doubled }, children);
}
export default Component31763;
