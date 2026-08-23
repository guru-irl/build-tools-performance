import React from 'react';
const LABEL_4377 = 'component_4377';
export function Component4377({ value = 4377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4377, 'data-value': derived.doubled }, children);
}
export default Component4377;
