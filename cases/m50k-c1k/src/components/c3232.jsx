import React from 'react';
const LABEL_3232 = 'component_3232';
export function Component3232({ value = 3232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3232, 'data-value': derived.doubled }, children);
}
export default Component3232;
