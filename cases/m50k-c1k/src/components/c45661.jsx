import React from 'react';
const LABEL_45661 = 'component_45661';
export function Component45661({ value = 45661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45661, 'data-value': derived.doubled }, children);
}
export default Component45661;
