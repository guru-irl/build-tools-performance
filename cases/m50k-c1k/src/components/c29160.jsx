import React from 'react';
const LABEL_29160 = 'component_29160';
export function Component29160({ value = 29160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29160, 'data-value': derived.doubled }, children);
}
export default Component29160;
