import React from 'react';
const LABEL_39322 = 'component_39322';
export function Component39322({ value = 39322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39322, 'data-value': derived.doubled }, children);
}
export default Component39322;
