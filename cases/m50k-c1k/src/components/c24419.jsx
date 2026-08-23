import React from 'react';
const LABEL_24419 = 'component_24419';
export function Component24419({ value = 24419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24419, 'data-value': derived.doubled }, children);
}
export default Component24419;
