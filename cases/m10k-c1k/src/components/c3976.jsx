import React from 'react';
const LABEL_3976 = 'component_3976';
export function Component3976({ value = 3976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3976, 'data-value': derived.doubled }, children);
}
export default Component3976;
