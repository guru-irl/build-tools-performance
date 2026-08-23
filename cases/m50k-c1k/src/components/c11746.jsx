import React from 'react';
const LABEL_11746 = 'component_11746';
export function Component11746({ value = 11746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11746, 'data-value': derived.doubled }, children);
}
export default Component11746;
