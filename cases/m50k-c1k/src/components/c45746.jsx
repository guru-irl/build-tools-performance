import React from 'react';
const LABEL_45746 = 'component_45746';
export function Component45746({ value = 45746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45746, 'data-value': derived.doubled }, children);
}
export default Component45746;
