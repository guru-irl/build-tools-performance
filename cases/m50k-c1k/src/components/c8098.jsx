import React from 'react';
const LABEL_8098 = 'component_8098';
export function Component8098({ value = 8098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8098, 'data-value': derived.doubled }, children);
}
export default Component8098;
