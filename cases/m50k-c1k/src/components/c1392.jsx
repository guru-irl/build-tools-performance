import React from 'react';
const LABEL_1392 = 'component_1392';
export function Component1392({ value = 1392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1392, 'data-value': derived.doubled }, children);
}
export default Component1392;
