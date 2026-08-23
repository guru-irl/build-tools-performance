import React from 'react';
const LABEL_16419 = 'component_16419';
export function Component16419({ value = 16419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16419, 'data-value': derived.doubled }, children);
}
export default Component16419;
