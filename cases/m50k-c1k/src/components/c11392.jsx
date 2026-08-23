import React from 'react';
const LABEL_11392 = 'component_11392';
export function Component11392({ value = 11392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11392, 'data-value': derived.doubled }, children);
}
export default Component11392;
