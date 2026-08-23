import React from 'react';
const LABEL_10988 = 'component_10988';
export function Component10988({ value = 10988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10988, 'data-value': derived.doubled }, children);
}
export default Component10988;
