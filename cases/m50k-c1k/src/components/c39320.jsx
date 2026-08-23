import React from 'react';
const LABEL_39320 = 'component_39320';
export function Component39320({ value = 39320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39320, 'data-value': derived.doubled }, children);
}
export default Component39320;
