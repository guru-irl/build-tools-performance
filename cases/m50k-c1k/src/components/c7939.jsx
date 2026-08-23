import React from 'react';
const LABEL_7939 = 'component_7939';
export function Component7939({ value = 7939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7939, 'data-value': derived.doubled }, children);
}
export default Component7939;
