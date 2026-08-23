import React from 'react';
const LABEL_4507 = 'component_4507';
export function Component4507({ value = 4507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4507, 'data-value': derived.doubled }, children);
}
export default Component4507;
