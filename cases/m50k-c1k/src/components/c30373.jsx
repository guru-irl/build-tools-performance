import React from 'react';
const LABEL_30373 = 'component_30373';
export function Component30373({ value = 30373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30373, 'data-value': derived.doubled }, children);
}
export default Component30373;
