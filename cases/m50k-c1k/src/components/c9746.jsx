import React from 'react';
const LABEL_9746 = 'component_9746';
export function Component9746({ value = 9746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9746, 'data-value': derived.doubled }, children);
}
export default Component9746;
