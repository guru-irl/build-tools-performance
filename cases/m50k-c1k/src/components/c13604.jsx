import React from 'react';
const LABEL_13604 = 'component_13604';
export function Component13604({ value = 13604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13604, 'data-value': derived.doubled }, children);
}
export default Component13604;
