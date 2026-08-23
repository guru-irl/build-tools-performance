import React from 'react';
const LABEL_29746 = 'component_29746';
export function Component29746({ value = 29746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29746, 'data-value': derived.doubled }, children);
}
export default Component29746;
