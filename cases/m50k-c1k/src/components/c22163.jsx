import React from 'react';
const LABEL_22163 = 'component_22163';
export function Component22163({ value = 22163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22163, 'data-value': derived.doubled }, children);
}
export default Component22163;
