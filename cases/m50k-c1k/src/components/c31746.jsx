import React from 'react';
const LABEL_31746 = 'component_31746';
export function Component31746({ value = 31746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31746, 'data-value': derived.doubled }, children);
}
export default Component31746;
