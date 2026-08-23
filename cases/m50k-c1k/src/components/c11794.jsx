import React from 'react';
const LABEL_11794 = 'component_11794';
export function Component11794({ value = 11794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11794, 'data-value': derived.doubled }, children);
}
export default Component11794;
