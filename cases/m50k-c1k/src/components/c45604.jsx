import React from 'react';
const LABEL_45604 = 'component_45604';
export function Component45604({ value = 45604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45604, 'data-value': derived.doubled }, children);
}
export default Component45604;
