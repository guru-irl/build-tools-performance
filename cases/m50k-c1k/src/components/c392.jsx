import React from 'react';
const LABEL_392 = 'component_392';
export function Component392({ value = 392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_392, 'data-value': derived.doubled }, children);
}
export default Component392;
