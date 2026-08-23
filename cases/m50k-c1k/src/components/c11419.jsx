import React from 'react';
const LABEL_11419 = 'component_11419';
export function Component11419({ value = 11419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11419, 'data-value': derived.doubled }, children);
}
export default Component11419;
