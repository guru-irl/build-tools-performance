import React from 'react';
const LABEL_22175 = 'component_22175';
export function Component22175({ value = 22175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22175, 'data-value': derived.doubled }, children);
}
export default Component22175;
