import React from 'react';
const LABEL_15584 = 'component_15584';
export function Component15584({ value = 15584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15584, 'data-value': derived.doubled }, children);
}
export default Component15584;
