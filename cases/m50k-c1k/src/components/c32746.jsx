import React from 'react';
const LABEL_32746 = 'component_32746';
export function Component32746({ value = 32746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32746, 'data-value': derived.doubled }, children);
}
export default Component32746;
