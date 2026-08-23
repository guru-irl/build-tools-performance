import React from 'react';
const LABEL_22565 = 'component_22565';
export function Component22565({ value = 22565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22565, 'data-value': derived.doubled }, children);
}
export default Component22565;
