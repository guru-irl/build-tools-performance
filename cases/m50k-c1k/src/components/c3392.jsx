import React from 'react';
const LABEL_3392 = 'component_3392';
export function Component3392({ value = 3392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3392, 'data-value': derived.doubled }, children);
}
export default Component3392;
