import React from 'react';
const LABEL_5219 = 'component_5219';
export function Component5219({ value = 5219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5219, 'data-value': derived.doubled }, children);
}
export default Component5219;
