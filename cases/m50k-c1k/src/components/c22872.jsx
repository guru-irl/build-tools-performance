import React from 'react';
const LABEL_22872 = 'component_22872';
export function Component22872({ value = 22872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22872, 'data-value': derived.doubled }, children);
}
export default Component22872;
