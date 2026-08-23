import React from 'react';
const LABEL_30364 = 'component_30364';
export function Component30364({ value = 30364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30364, 'data-value': derived.doubled }, children);
}
export default Component30364;
