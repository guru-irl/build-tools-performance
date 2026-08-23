import React from 'react';
const LABEL_43746 = 'component_43746';
export function Component43746({ value = 43746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43746, 'data-value': derived.doubled }, children);
}
export default Component43746;
