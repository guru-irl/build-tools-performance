import React from 'react';
const LABEL_11972 = 'component_11972';
export function Component11972({ value = 11972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11972, 'data-value': derived.doubled }, children);
}
export default Component11972;
