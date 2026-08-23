import React from 'react';
const LABEL_22419 = 'component_22419';
export function Component22419({ value = 22419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22419, 'data-value': derived.doubled }, children);
}
export default Component22419;
