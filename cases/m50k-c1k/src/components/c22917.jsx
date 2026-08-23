import React from 'react';
const LABEL_22917 = 'component_22917';
export function Component22917({ value = 22917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22917, 'data-value': derived.doubled }, children);
}
export default Component22917;
