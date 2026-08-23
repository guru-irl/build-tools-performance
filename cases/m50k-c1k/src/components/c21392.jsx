import React from 'react';
const LABEL_21392 = 'component_21392';
export function Component21392({ value = 21392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21392, 'data-value': derived.doubled }, children);
}
export default Component21392;
