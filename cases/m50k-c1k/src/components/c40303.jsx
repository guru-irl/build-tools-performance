import React from 'react';
const LABEL_40303 = 'component_40303';
export function Component40303({ value = 40303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40303, 'data-value': derived.doubled }, children);
}
export default Component40303;
