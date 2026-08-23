import React from 'react';
const LABEL_22086 = 'component_22086';
export function Component22086({ value = 22086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22086, 'data-value': derived.doubled }, children);
}
export default Component22086;
