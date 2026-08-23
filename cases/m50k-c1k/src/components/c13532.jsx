import React from 'react';
const LABEL_13532 = 'component_13532';
export function Component13532({ value = 13532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13532, 'data-value': derived.doubled }, children);
}
export default Component13532;
