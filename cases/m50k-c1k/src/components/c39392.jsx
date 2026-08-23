import React from 'react';
const LABEL_39392 = 'component_39392';
export function Component39392({ value = 39392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39392, 'data-value': derived.doubled }, children);
}
export default Component39392;
