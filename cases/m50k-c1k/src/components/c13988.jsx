import React from 'react';
const LABEL_13988 = 'component_13988';
export function Component13988({ value = 13988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13988, 'data-value': derived.doubled }, children);
}
export default Component13988;
