import React from 'react';
const LABEL_26988 = 'component_26988';
export function Component26988({ value = 26988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26988, 'data-value': derived.doubled }, children);
}
export default Component26988;
