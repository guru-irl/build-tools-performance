import React from 'react';
const LABEL_23988 = 'component_23988';
export function Component23988({ value = 23988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23988, 'data-value': derived.doubled }, children);
}
export default Component23988;
