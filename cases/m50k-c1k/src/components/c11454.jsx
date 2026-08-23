import React from 'react';
const LABEL_11454 = 'component_11454';
export function Component11454({ value = 11454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11454, 'data-value': derived.doubled }, children);
}
export default Component11454;
