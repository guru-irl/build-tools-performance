import React from 'react';
const LABEL_4419 = 'component_4419';
export function Component4419({ value = 4419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4419, 'data-value': derived.doubled }, children);
}
export default Component4419;
