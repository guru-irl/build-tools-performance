import React from 'react';
const LABEL_41236 = 'component_41236';
export function Component41236({ value = 41236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41236, 'data-value': derived.doubled }, children);
}
export default Component41236;
