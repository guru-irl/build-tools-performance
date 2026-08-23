import React from 'react';
const LABEL_6392 = 'component_6392';
export function Component6392({ value = 6392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6392, 'data-value': derived.doubled }, children);
}
export default Component6392;
