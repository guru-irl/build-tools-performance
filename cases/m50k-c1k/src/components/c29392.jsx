import React from 'react';
const LABEL_29392 = 'component_29392';
export function Component29392({ value = 29392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29392, 'data-value': derived.doubled }, children);
}
export default Component29392;
