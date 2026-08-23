import React from 'react';
const LABEL_28767 = 'component_28767';
export function Component28767({ value = 28767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28767, 'data-value': derived.doubled }, children);
}
export default Component28767;
