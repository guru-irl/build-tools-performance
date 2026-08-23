import React from 'react';
const LABEL_28377 = 'component_28377';
export function Component28377({ value = 28377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28377, 'data-value': derived.doubled }, children);
}
export default Component28377;
