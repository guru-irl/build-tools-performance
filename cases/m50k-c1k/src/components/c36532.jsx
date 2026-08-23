import React from 'react';
const LABEL_36532 = 'component_36532';
export function Component36532({ value = 36532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36532, 'data-value': derived.doubled }, children);
}
export default Component36532;
