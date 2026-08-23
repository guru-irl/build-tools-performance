import React from 'react';
const LABEL_34700 = 'component_34700';
export function Component34700({ value = 34700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34700, 'data-value': derived.doubled }, children);
}
export default Component34700;
