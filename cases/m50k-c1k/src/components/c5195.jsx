import React from 'react';
const LABEL_5195 = 'component_5195';
export function Component5195({ value = 5195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5195, 'data-value': derived.doubled }, children);
}
export default Component5195;
