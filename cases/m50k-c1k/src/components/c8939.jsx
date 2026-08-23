import React from 'react';
const LABEL_8939 = 'component_8939';
export function Component8939({ value = 8939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8939, 'data-value': derived.doubled }, children);
}
export default Component8939;
