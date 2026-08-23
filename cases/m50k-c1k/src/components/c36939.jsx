import React from 'react';
const LABEL_36939 = 'component_36939';
export function Component36939({ value = 36939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36939, 'data-value': derived.doubled }, children);
}
export default Component36939;
