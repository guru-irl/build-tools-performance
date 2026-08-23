import React from 'react';
const LABEL_2430 = 'component_2430';
export function Component2430({ value = 2430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2430, 'data-value': derived.doubled }, children);
}
export default Component2430;
