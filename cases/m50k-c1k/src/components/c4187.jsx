import React from 'react';
const LABEL_4187 = 'component_4187';
export function Component4187({ value = 4187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4187, 'data-value': derived.doubled }, children);
}
export default Component4187;
