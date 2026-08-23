import React from 'react';
const LABEL_21419 = 'component_21419';
export function Component21419({ value = 21419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21419, 'data-value': derived.doubled }, children);
}
export default Component21419;
