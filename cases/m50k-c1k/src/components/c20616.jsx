import React from 'react';
const LABEL_20616 = 'component_20616';
export function Component20616({ value = 20616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20616, 'data-value': derived.doubled }, children);
}
export default Component20616;
