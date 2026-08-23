import React from 'react';
const LABEL_43642 = 'component_43642';
export function Component43642({ value = 43642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43642, 'data-value': derived.doubled }, children);
}
export default Component43642;
