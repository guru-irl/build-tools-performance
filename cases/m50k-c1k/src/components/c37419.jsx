import React from 'react';
const LABEL_37419 = 'component_37419';
export function Component37419({ value = 37419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37419, 'data-value': derived.doubled }, children);
}
export default Component37419;
