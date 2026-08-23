import React from 'react';
const LABEL_39759 = 'component_39759';
export function Component39759({ value = 39759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39759, 'data-value': derived.doubled }, children);
}
export default Component39759;
