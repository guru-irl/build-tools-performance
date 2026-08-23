import React from 'react';
const LABEL_30392 = 'component_30392';
export function Component30392({ value = 30392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30392, 'data-value': derived.doubled }, children);
}
export default Component30392;
