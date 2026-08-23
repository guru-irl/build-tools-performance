import React from 'react';
const LABEL_43565 = 'component_43565';
export function Component43565({ value = 43565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43565, 'data-value': derived.doubled }, children);
}
export default Component43565;
