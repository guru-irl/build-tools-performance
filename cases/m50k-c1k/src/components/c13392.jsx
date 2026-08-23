import React from 'react';
const LABEL_13392 = 'component_13392';
export function Component13392({ value = 13392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13392, 'data-value': derived.doubled }, children);
}
export default Component13392;
