import React from 'react';
const LABEL_1746 = 'component_1746';
export function Component1746({ value = 1746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1746, 'data-value': derived.doubled }, children);
}
export default Component1746;
