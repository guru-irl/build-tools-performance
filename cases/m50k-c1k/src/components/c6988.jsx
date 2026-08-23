import React from 'react';
const LABEL_6988 = 'component_6988';
export function Component6988({ value = 6988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6988, 'data-value': derived.doubled }, children);
}
export default Component6988;
