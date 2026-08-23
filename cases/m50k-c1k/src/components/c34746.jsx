import React from 'react';
const LABEL_34746 = 'component_34746';
export function Component34746({ value = 34746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34746, 'data-value': derived.doubled }, children);
}
export default Component34746;
