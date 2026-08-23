import React from 'react';
const LABEL_22392 = 'component_22392';
export function Component22392({ value = 22392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22392, 'data-value': derived.doubled }, children);
}
export default Component22392;
