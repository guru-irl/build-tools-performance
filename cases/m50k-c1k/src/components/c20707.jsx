import React from 'react';
const LABEL_20707 = 'component_20707';
export function Component20707({ value = 20707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20707, 'data-value': derived.doubled }, children);
}
export default Component20707;
