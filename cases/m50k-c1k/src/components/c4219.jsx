import React from 'react';
const LABEL_4219 = 'component_4219';
export function Component4219({ value = 4219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4219, 'data-value': derived.doubled }, children);
}
export default Component4219;
