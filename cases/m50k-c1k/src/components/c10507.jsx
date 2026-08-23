import React from 'react';
const LABEL_10507 = 'component_10507';
export function Component10507({ value = 10507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10507, 'data-value': derived.doubled }, children);
}
export default Component10507;
