import React from 'react';
const LABEL_16746 = 'component_16746';
export function Component16746({ value = 16746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16746, 'data-value': derived.doubled }, children);
}
export default Component16746;
