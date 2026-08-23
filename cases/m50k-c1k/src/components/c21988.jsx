import React from 'react';
const LABEL_21988 = 'component_21988';
export function Component21988({ value = 21988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21988, 'data-value': derived.doubled }, children);
}
export default Component21988;
