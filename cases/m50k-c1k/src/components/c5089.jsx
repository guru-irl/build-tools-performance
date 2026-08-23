import React from 'react';
const LABEL_5089 = 'component_5089';
export function Component5089({ value = 5089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5089, 'data-value': derived.doubled }, children);
}
export default Component5089;
