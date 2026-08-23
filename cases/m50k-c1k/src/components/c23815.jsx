import React from 'react';
const LABEL_23815 = 'component_23815';
export function Component23815({ value = 23815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23815, 'data-value': derived.doubled }, children);
}
export default Component23815;
