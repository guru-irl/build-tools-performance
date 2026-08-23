import React from 'react';
const LABEL_20939 = 'component_20939';
export function Component20939({ value = 20939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20939, 'data-value': derived.doubled }, children);
}
export default Component20939;
