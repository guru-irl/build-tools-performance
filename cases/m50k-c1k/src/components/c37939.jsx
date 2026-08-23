import React from 'react';
const LABEL_37939 = 'component_37939';
export function Component37939({ value = 37939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37939, 'data-value': derived.doubled }, children);
}
export default Component37939;
