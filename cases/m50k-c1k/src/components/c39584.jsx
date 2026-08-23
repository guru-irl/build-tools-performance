import React from 'react';
const LABEL_39584 = 'component_39584';
export function Component39584({ value = 39584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39584, 'data-value': derived.doubled }, children);
}
export default Component39584;
